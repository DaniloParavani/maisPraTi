import { useState } from 'react'
import styled from 'styled-components'
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    return (
        <container>
            <title>QRCode Generator</title>
                <input 
                    type='text'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                {text && (
                    <div>
                        <QRCode value={text} size={256} />
                    </div>
                )}
        </container>
    )
}

export default QRCodeGenerator