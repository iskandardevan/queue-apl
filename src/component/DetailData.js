const DetailData = (props) => {

    const { ID, NAME, PHONE, SEX, UTILITIES, AGE, Created_At } = props.data

    return (
        <>
            <div>
                {NAME}
            </div>
            <div>
                {PHONE}
            </div>
            <div>
                {SEX}
            </div>
            <div>
                {UTILITIES}
            </div>
            <div>
                {AGE}
            </div>
            <div>
                {Created_At}
            </div>
        </>
    )
}

export default DetailData;