import Hhead from '../components/Hhead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Login from './login';
import { useAuth } from "@/contexts/auth"

export default function Overview() {
    const { user, token } = useAuth()
    return (
        <>
            {user ? (
                <>
                    <Hhead data={"Overview"} />
                    <Header nav={"Home"} lin={'/'} />
                    <h1 className='mt-5 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900' >Hello In Overview Page</h1>
                    <Footer data={""} />
                </>
            ) : (
                <Login />
            )
            }

        </>
    )
}