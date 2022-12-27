import { defaultConfig } from "next/dist/server/config-shared"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Store } from 'react-notifications-component';


const CandidatiForm = ()=>{

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [surename,setSurename] = useState('');
    const [terms,setTerms] = useState(false);

    const [disabled,setDisabled] = useState(false);
    const [isValidEmail,setValidEmail] = useState(false);


    useEffect(()=>{ 

        const emailRegex = /\S+@\S+\.\S+/;
        setValidEmail(emailRegex.test(email));

        setEmail(email.toLowerCase()); 

        if(isValidEmail && terms && email.length && name.length && surename.length){
            setDisabled(false);
        }else{
            setDisabled(true);
        }

    },[email,name,disabled,isValidEmail, terms]);

    const clean = ()=>{
        setEmail("");
        setName("");
        setSurename("");
        setTerms(false);
    }

    const sendEmail = ()=> {    

        const greetingsEmail = {
            from: email,
            subject: `GRAZIE PER ESSERTI CANDIDATO AL CORSO NOVA42`,
            message: `<p>
                        Ciao <strong>${name}</strong>,<br/> 
                        Grazie per esserti candidato alla nostra Academy per aspiranti sviluppatori full stack.<br/>
                        Nelle prossime ore verrai contattato da uno dei nostri tutor per fissare la data del colloquio
                        conoscitivo.<br/> 
                      </p>
                      <p>
                        A presto!<br/><br/>
                        Nova42
                      </p>`,
            type:'greetings'
        }

        const summaryEmail = {
            from: email,
            subject: `RICHIESTA CANDIDATURA DA ${name} ${surename}`,
            message: `<p>
                        Ciao <strong>Nova42</strong>,<br/> 
                        Qui di seguito i dati della persona che desidera candidarsi al corso.<br/> 
                    </p>
                    <table style="border: 1px solid black; text-align: left;">
                        <tr>
                            <th>Cognome</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                        </tr>
                        <tr>
                            <td>${surename}</td>
                            <td>${name}</td>
                            <td>${email}</td>
                        </tr>
                    </table>
                    <br/>
                    Grazie.`,
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
                    title: "Opps!",
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
        <div>
            <div className="form-group mt-5">
                <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">Nome</label>
                <input type="text" className="form-control mt-2" id="formGroupExampleInput" placeholder="Nome" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
                <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">Cognome</label>
                <input type="text" className="form-control mt-2" id="formGroupExampleInput" value={surename} onChange={(e)=>setSurename(e.target.value)} placeholder="Cognome" />
            </div>
            <div className="form-group mt-3">
                <label className="text-white text-capitalize" htmlFor="formGroupExampleInput">Email</label>
                <input type="email" className="form-control mt-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="row mt-4 pb-5">
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={terms} onChange={(e)=>setTerms(e.target.checked)}/>
                        <label className="form-check-label text-white size-12" htmlFor="gridCheck">
                            Accetto le 
                            <Link href={'/privacy'}><a style={{color: 'blue'}}> Privacy policy </a></Link>
                             di Nova42
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                    <button className="btn btn-nova-fill size-16 mt-5" type="submit" disabled={disabled} onClick={()=>sendEmail()}>{'Inizia il viaggio con Nova'}</button>
                </div>
            </div>
        </div>
    )
}



export default CandidatiForm