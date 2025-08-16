import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'

export function Companies() {
  const companies = [
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
    { imagePath: '/partners/Meta.png', alt: 'Meta' },
    { imagePath: '/partners/NuBank.png', alt: 'NuBank' },
  ]

  return (
    <Marquee pauseOnHover>
      {companies.map((company, index) => (
        <div key={index} className="mx-4 flex-none">
          <Image
            src={company.imagePath}
            alt={company.alt}
            width={60}
            height={60}
            className="object-contain"
            priority
            quality={100}
          />
        </div>
      ))}
    </Marquee>
  )
}
