import { useState, useEffect } from "react";
import { Store } from 'react-notifications-component';
import Link from "next/link";

const ContattaComponentGeneral = ({bg=''})=> {


    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [surename,setSurename] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');

    const [newsLetter,setNewsLetter] = useState(false);
    const [newsLetterMessage,setNewsLetterMessage] = useState('');

    const [disabled,setDisabled] = useState(false);
    const [isValidEmail,setValidEmail] = useState(false);
    const [isValidPhone,setValidPhone] = useState(false);


    useEffect(()=>{ 

        const emailRegex = /\S+@\S+\.\S+/;
        setValidEmail(emailRegex.test(email));

        setEmail(email.toLowerCase()); 

        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        setValidPhone(phoneRegex.test(phone));

        if(newsLetter){
            setNewsLetterMessage("<p>Questo utente <strong>ACCONSENTE</strong> all'invio di materiale infotmativo via e-mail da parte di Mattia Noris riguardo le ultime notizie e suoi nuovi servizi.</p>")
        }else{
            setNewsLetterMessage("<p>Questo utente <strong>NON ACCONSENTE</strong> all'invio di materiale infotmativo via e-mail da parte di Mattia Noris.</p>")
        }

        if(isValidEmail && isValidPhone && email.length && name.length && surename.length && message.length){
            setDisabled(false);
        }else{
            setDisabled(true);
        }

    },[email,name,surename,phone,message,newsLetter,disabled,isValidEmail, isValidPhone]);

    const clean = ()=>{
        setEmail("");
        setName("");
        setSurename("");
        setPhone("");
        setMessage("");
        setNewsLetter(false);
    }

    const sendEmail = ()=> {    

        const greetingsEmail = {
            from: email,
            subject: `GRAZIE PER AVER CONTATTATO MATTIA NORIS`,
            message: `<p>
                        Ciao <strong>${name}</strong>,<br/> 
                        Ho ricevuto la tua richiesta.<br/> 
                        Ti contatteremo nelle prossime ore per capire se e come possiamo esserti utili.<br/> 
                        A presto!<br/><br/>
                        Mattia Noris Team
                      </p>`,
            newsLetter: newsLetter,
            type:'greetings'
        }

        const summaryEmail = {
            from: email,
            subject: `RICHIESTA DI CONTATTATO DA ${name} ${surename}`,
            message: `<p>
                        Ciao <strong>Mattia Noris</strong>,<br/> 
                        Qui di seguito i dati della persona che desidera essere contattata.<br/> 
                    </p>
                    <table style="border: 1px solid black; text-align: left;">
                        <tr>
                            <th>Cognome</th>
                            <th>Nome</th>
                            <th>Cellulare</th>
                            <th>E-mail</th>
                        </tr>
                        <tr>
                            <td>${surename}</td>
                            <td>${name}</td>
                            <td>${phone}</td>
                            <td>${email}</td>
                        </tr>
                    </table>
                    <br/>
                    <p>Il messaggio lasciato da questo utente è: <p><br> 
                    <p><i>${message}</i></p><br/> 
                    <p>N:B.:</p>
                    ""<br/>
                    ${newsLetterMessage}
                    ""<br/>
                    Grazie.`,
            newsLetter: newsLetter,
            type:'summary'
        }

        const emails = {
            data:[greetingsEmail,summaryEmail]
        }

        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emails),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                Store.addNotification({
                    title: "Perfetto!",
                    message: "Messaggio inviato correttamente",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
                clean();
            })
            .catch((error) => {
                console.error('Error:', error);
                Store.addNotification({
                    title: "Oops!",
                    message: "Errore nell'invio del messaggio",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
                clean();
            });

    };

    return (
        <div className={bg}>
            <div className="form-group mt-5">
                <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">Nome</label>
                <input type="text" className="form-control mt-2" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nome" />
            </div>
            <div className="form-group mt-3">
                <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">Cognome</label>
                <input type="text" className="form-control mt-2" value={surename} onChange={(e)=>setSurename(e.target.value)} placeholder="Cognome" />
            </div>
            <div className="form-row row">
                <div className="col-12 col-md-6">
                    <div className="form-group mt-3">
                        <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">E-mail</label>
                        <input type="text" className="form-control mt-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group mt-3">
                        <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">Cellulare</label>
                        <input type="text" className="form-control mt-2" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Cellulare" />
                    </div>
                </div>
            </div>
            <div className="form-group mt-3">
                <label className="text-white text-capitalize" htmlFor="exampleFormControlTextarea1">Messaggio</label>
                <textarea className="form-control mt-2 mb-5" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
            </div>
            <div className="row mt-4 pb-5">
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={newsLetter} onChange={(e)=>setNewsLetter(e.target.checked)} />
                        <label className="form-check-label text-white size-12" htmlFor="gridCheck">
                            Si, voglio iscrivermi alla newsletter e rimanere aggiornato sulle novità di Nova42
                        </label>
                        <p className="text-white size-12 mt-2">Se cambi idea puoi disinscriverti <strong className="text-purple">quando vuoi.</strong></p>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-content-center">
                    <button className="btn btn-nova-fill size-16 mt-3 mx-auto" type="submit" disabled={disabled} onClick={()=>sendEmail()}>{'Invia il Form'}</button>
                </div>
                    <p className="text-muted size-12 mt-3 p-4 text-center">Inviando questo form acconsento ad essere contattato dal team di Nova42 e le sue
                    <Link href={'/privacy'}><a style={{color: 'blue'}}> Privacy policy</a></Link>
                     .</p>
            </div>
        </div>
    )


}

export default ContattaComponentGeneral