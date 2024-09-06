import TutorialStep from './TutorialStep'

type TutorialProps = {
    steps : TutorialStep[]
}

const Tutorial = ({steps} : TutorialProps) => {
    return (
        <div className='flex flex-wrap justify-center gap-12'>
            {steps.map((step, index) => (
                <div key={index} className='flex flex-col items-center gap-4 max-w-xs text-center'>
                    <h2 className='text-blue-dark text-2xl lg:text-2xl font-bold'>
                        {step.title}
                    </h2>
                    <img 
                        src={step.img} 
                        alt={`step${index}`}
                        className='w-80'
                    />
                    <p className='text-black text-xl '>
                        {step.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Tutorial
