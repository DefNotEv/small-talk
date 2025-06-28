import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2C3440',
          borderRadius: '24px',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 255 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="255" height="255" fill="#2C3440"/>
          <path 
            d="M89.12 169.08L96.8 167.16V85.24L89.12 83.32V81.4H105.76C113.44 81.4 117.28 85.24 117.28 92.92V167.16L124.96 169.08V171H89.12V169.08ZM132.62 169.08L140.3 167.16V85.24L132.62 83.32V81.4H149.26C156.94 81.4 160.78 85.24 160.78 92.92V167.16L168.46 169.08V171H132.62V169.08Z" 
            fill="#F6F3EF"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
} 