import Hhead from '../components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <Hhead data={"Login"} />
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className={`flex flex-col items-center justify-between p-20 ${inter.className}`}>
                    <LoginForm />
                </main>
                <Footer/>
            </div>
        </>
    )
}