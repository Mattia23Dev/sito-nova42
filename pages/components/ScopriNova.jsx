import Link from "next/link";
import { useState, useEffect } from "react";
import { Store } from 'react-notifications-component';

const ScopriNova = ({customClass=''})=>{

    const [email,setEmail] = useState('');
    const [terms,setTerms] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [isValidEmail,setValidEmail] = useState(false);

    useEffect(()=>{ 

        const emailRegex = /\S+@\S+\.\S+/;
        setValidEmail(emailRegex.test(email));

        setEmail(email.toLowerCase()); 

        if(isValidEmail && terms){
            setDisabled(false);
        }else{
            setDisabled(true);
        }

    },[email,terms,disabled,isValidEmail]);

    const clean = ()=>{
        setEmail("");
        setTerms(false);
    }

    const sendEmail = ()=> {    

        const greetingsEmail = {
            from: email,
            subject: `GRAZIE PER IL TUO INTERESSE!`,
            message: `<p>
                        Ciao <strong>${email}</strong>!,<br/> 
                        Grazie per aver scaricato la brochure di presentazione della nostra Academy per Full Stack
                        Developer<br/> 
                      </p>
                      <p>
                        In Italia ci sono più di 30.000 opportunità di lavoro per programmatori e con il nostro percorso hai la
                        possibilità di intraprendere una nuova carriera in soli 60 giorni di aula virtuale.
                      </p>
                      <p>
                        Ecco cosa contiene la nostra brochure informativa:
                      </p>
                      <p>
                        Ecco cosa contiene la nostra brochure informativa:
                      </p>
                      <ul>
                        <li>Chi è e cosa fa il Full Stack Developer</li>
                        <li>Perché intraprendere la carriera da Full Stack Developer</li>
                        <li>Le caratteristiche distintive del nostro percorso e come si svolge</li>
                        <li>Cosa impari con i nostri percorsi formativi</li>
                        <li>Cosa succede a fine corso</li>
                        <li>Garanzia Collocato o Rimborsato</li>
                        <li>Borsa di Studio Nova42</li>
                        <li>Risposte alle domande più frequenti</li>
                      </ul>
                      <p>
                        Per qualsiasi curiosità non esitare a rispondere a questa mail.
                      </p>
                      <p>
                        A presto!<br/><br/>
                        Nova42
                      </p>`,
            type:'greetings'
        }

        const summaryEmail = {
            from: email,
            subject: `${email} HA SCARICATO LA BROCHURE!`,
            message: `<p>
                        Ciao <strong>Nova42</strong>,<br/> 
                        Qui di seguito i dati della persona che desidera candidarsi al corso.<br/> 
                    </p>
                    <table style="border: 1px solid black; text-align: left;">
                        <tr>
                            <th>E-mail</th>
                        </tr>
                        <tr>
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

    return(
        <div className={`w-100 ${customClass}`}>
            <h5 className="gradient-fill size-18 size-md-22 weight-700 text-center mt-3 mb-3 mb-md-2">Scarica la brochure dell&apos;Academy SuperNova!</h5>
            <h2 className="text-white size-30 size-md-40 weight-700 text-center">Scopri tutto sul corso NOVA42</h2>
            <div className="row mt-4">
                <div className="form-group col-12 col-md-5 mx-auto">
                    <input type="email" className="form-control nova-input" name="email" id="emailID" placeholder="Inserisci la tua email qua!" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="row mt-4 pb-5">
                <div className="form-group col-12 col-md-4 mx-auto">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="termsID" checked={terms} onChange={(e)=>setTerms(e.target.checked)}/>
                        <label className="form-check-label text-white size-12" htmlFor="gridCheck">
                            Ho letto e accettato le 
                            <Link href={'/privacy'}><a style={{color: 'blue'}}> Privacy policy </a></Link>
                            di Nova42
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-content-center">
                    {
                        !disabled && ( <a href={'/pdf/presentazione_corso.pdf'} download="presentazione-corso-nova42"><button className="btn btn-nova-fill size-16 mt-3 mx-auto" type="submit" disabled={disabled} onClick={()=>sendEmail()}>{'Scarica il programma'}</button></a>)
                    }
                    {
                        disabled && (<button className="btn btn-nova-fill size-16 mt-3 mx-auto" type="submit" disabled={disabled}>{'Scarica il programma'}</button>)
                    }
                </div>
            </div>
        </div>)
}


export default ScopriNova;