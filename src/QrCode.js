import QRCode from "qrcode";
import { useEffect, useState } from "react";

function QrCode() {

    const link = "https://register-oprk79ov0-studio1906mail-gmailcom.vercel.app"

    const [src, setSrc] = useState("")

    useEffect(() => {
        QRCode.toDataURL(link).then((data) => {
            setSrc(data)
        })
    }, [])

    return (
        <div>
            <img src={src} />
        </div>
    )
}

export default QrCode
