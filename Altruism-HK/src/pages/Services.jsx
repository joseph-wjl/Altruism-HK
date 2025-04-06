import React from 'react'
import './Services.css'

export default function Services(){

    return (
        <>
            <div className="services-container">
                <div className="services-hero">
                    <h1>We are a comprehensive treatment center that combines <strong>Chinese</strong> and <strong>Western</strong> elements.</h1>
                </div>
                <div className="header">
                    <p>Altruism is led by a doctor of integrated Chinese and Western medicine, together with other experienced Chinese medicine practitioners, therapists, masseurs and other professionals. A traditional Chinese medicine clinic that integrates treatment, health care, conditioning, health preservation and beauty. </p>
                    <p>It not only combines the wisdom of traditional Chinese medicine, but is also equipped with advanced Western instruments to provide you with professional, high-quality, reliable and distinguished personalized overall physical and mental health treatment! </p>
                    <p>The clinic environment is comfortable and elegant. Each patient has an independent consulting room and treatment room with high privacy and confidentiality. It is especially suitable for you who are busy with work and pursue physical and mental health!</p>
                </div>
                <div className="cards-container">
                    
                        <div className="cards">
                            <div className="card">
                                <h2>Internal Medicine</h2>
                                <p>Cold, cough, stomachache, constipation, diarrhea, palpitations, insomnia, dizziness, headache, COVID-19</p>
                            </div>
                            <div className="card">
                                <h2>Gynecology</h2>
                                <p>Dysmenorrhea, menstrual disorders, pre-menopausal and post-menopausal syndromes, uterine fibroids, endometriosis, infertility, prenatal and postpartum conditioning</p>
                            </div>
                            <div className="card">
                                <h2>Acupuncture</h2>
                                <p>Facial paralysis, shoulder and neck pain, slingshot hand, mommy hand, frozen shoulder, sequelae of stroke</p>
                            </div>
                            <div className="card">
                                <h2>Pain treatment</h2>
                                <p>Various pain syndromes, lumbar disc herniation, cervical spondylosis</p>
                            </div>
                            <div className="card">
                                <h2>Skin Conditioning</h2>
                                <p>Eczema, eczema, dermatitis, psoriasis, acne, acne, rosacea</p>
                            </div>
                            <div className="card">
                                <h2>Chinese medicine esthetics</h2>
                                <p>Firming and slimming face, removing dark circles, lightening spots, removing wrinkles, losing weight, hair loss</p>
                            </div>
                            <div className="card">
                                <h2>Men’s Health</h2>
                                <p>Decreased sexual function, infertility, prostate problems</p>
                            </div>
                            <div className="card">
                                <h2>Manual therapy and reduction</h2>
                                <p>Various muscle and bone injuries</p>
                            </div>
                        </div>
                        {/* <div class="scrolling-wrapper">
                            <div class="card"><h2>Card</h2></div>
                            <div class="card"><h2>Card</h2></div>
                            <div class="card"><h2>Card</h2></div>
                        </div> */}
                    
                </div> 
            </div>
        </>
    )
}