import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json()

    // Validate phone number
    if (!phoneNumber || phoneNumber.length !== 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // TODO: Add your backend logic here
    // Examples:
    // - Save to database (Prisma, Supabase, etc.)
    // - Send SMS via Twilio
    // - Generate referral code
    // - Send to AI service for personality analysis

    console.log('Phone number received:', phoneNumber)

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Phone number submitted successfully',
      referralCode: generateReferralCode(),
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing phone number:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateReferralCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
} 