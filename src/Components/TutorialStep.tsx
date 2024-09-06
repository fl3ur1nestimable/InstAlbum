const TutorialStep = (title : string, text : string, img : string) => {
    return {
        title,
        text,
        img
    }
}

type TutorialStep = {
    title : string,
    text : string,
    img : string
}

export default TutorialStep
