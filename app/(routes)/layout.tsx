import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-full flex flex-col justify-between gap-2'>
			<div className='mx-10 pt-10 md:flex'>
				<Navbar />
				<div className='md:ml-[210px] w-full'>
					{children}
				</div>
			</div>
			<Footer />
		</div>
	)
}
