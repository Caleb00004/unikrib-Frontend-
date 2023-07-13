// Style is in the globals.css file

export default function Loading(customStyle = {}) {
    console.log(customStyle)

    const isObjectEmpty = Object.keys(customStyle).length === 0

    return (
        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={isObjectEmpty ? {} : customStyle.style}  className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            {isObjectEmpty && <p style={{textAlign: 'center'}}>Loading..</p>    }
        </div>
    )
}