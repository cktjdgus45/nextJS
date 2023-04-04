import { EmailData } from './nodeMail';

export const sendContactEmail = async (email: EmailData) => {
    //우리 API ROUTE에 이메일 전송을 위한 요청을 보냄(fetch)
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Cotent-Type': 'application/json',
        }
    })
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || '서버 요청에 실패함');
    }
    return data;
}