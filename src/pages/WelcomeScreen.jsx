import Button from '../components/Button'

function WelcomeScreen() {
    return (
        <div className='col-span-2 flex flex-justify-center flex-col items-center px-4 py-12 space-y-8'>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold text-center'>Selamat Datang di Si-OMan</h1>
                <h2 className="text-xl font-semibold text-center">Pilih salah satu dari menu di bawah</h2>
            </div>

            <div className='flex flex-row justify-center space-x-4'>
                <Button onClick={() => navigate('/add-item')}>
                    Dine In
                </Button>
                <Button onClick={() => navigate('/add-item')}>
                    Take Away
                </Button>
            </div>
        </div>
    )
}

export default WelcomeScreen