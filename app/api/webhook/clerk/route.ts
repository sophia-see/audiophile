import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { createUser } from '@/lib/actions/user.actions'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(WEBHOOK_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  // const { id } = evt.data
  const eventType = evt.type
  
  console.log({eventType})
  
  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name} = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      // username: username!,
      firstName: first_name!,
      lastName: last_name!,
      // photo: image_url
    }
    console.log("creating new user")
    const newUser = await createUser(user);
    
    if (newUser) {
      console.log("user created:", newUser)
      const client = await clerkClient()

      await client.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id
        }
      })
    }

    return NextResponse.json({message: "OK", user: newUser})
  }

  // if (eventType === 'user.updated') {
  //   const {id, image_url, first_name, last_name, username } = evt.data

  //   const user = {
  //     firstName: first_name!,
  //     lastName: last_name!,
  //     username: username!,
  //     photo: image_url,
  //   }

  //   const updatedUser = await updateUser(id, user)

  //   return NextResponse.json({ message: 'OK', user: updatedUser })
  // }

  // if (eventType === 'user.deleted') {
  //   const { id } = evt.data

  //   const deletedUser = await deleteUser(id!)

  //   return NextResponse.json({ message: 'OK', user: deletedUser })
  // }

  return new Response('', { status: 200 })
}