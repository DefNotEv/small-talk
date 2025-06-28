import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #C87C73, #9E7A91)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F6F3EF',
          fontWeight: 'bold',
          borderRadius: '6px',
        }}
      >
        st
      </div>
    ),
    {
      ...size,
    }
  )
} 