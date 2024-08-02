import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const IPAdressFinder = () => {
    const [ip, setIP] = useState('');
    const [ipData, setIPData ] = useState(null);

    const findIP = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            setIPData(response.data)
        } catch (error) {
            console.log("Error fetching IP address data: ", error)
        }
    }

    return (
        <container>
            <title>IP Address Finder</title>
            <input
                type="text"
                value={ip}
                onChange={(e) => setIP(e.target.value)}
                placeholder="Enter IP address"
            />
            <button onClick={findIP}>Find IP</button>
            {ipData && (
                <div>
                    <p><strong>IP: </strong>{ipData.ip}</p>
                    <p><strong>Location: </strong>{ipData.city}, {ipData.region}, {ipData.country}</p>
                    <p><strong>ISP: </strong>{ipData.org}</p>
                </div>
            )}
        </container>
    )
}

export default IPAdressFinder;