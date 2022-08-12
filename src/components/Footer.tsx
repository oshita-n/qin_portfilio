import type { NextPage } from 'next'
import Image from 'next/image'

export const Footer: NextPage = () => {
    return (
        <div>
            <footer className="bg-gray-400">
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <span className="">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                    </a>
            </footer>
        </div>
    )
}