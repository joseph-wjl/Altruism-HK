import React from 'react'
import './Services.css'
import acupuntureImg from '../assets/images/acupuncture.jpg';
import cuppingImg from '../assets/images/cupping.avif';
import injectionImg from '../assets/images/injection.jpg';
import moxibustionImg from '../assets/images/moxibustion.avif';
import massageImg from '../assets/images/massage.jpeg';
import painImg from '../assets/images/pain-treatment.avif';
import tianjiuImg from '../assets/images/tianjiu.jpg';

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
                </div> 
                <div className="services-details-container">
                    <div className="services-details">
                        <img src={acupuntureImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Acupuncture</h2>
                            <p>By stimulating the acupuncture points with fine needles, the purpose of regulating qi and calming the mind, and curing diseases can be achieved. Holistic acupuncture can balance the yin and yang, qi and blood of the five internal organs.</p>
                            <p>Local acupuncture can help dredge the meridians, promote blood circulation and qi circulation, and achieve the purpose of curing diseases, health care, and health preservation.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src={cuppingImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Cupping</h2>
                            <p>The negative pressure in cupping is used to make it adsorb onto the skin, causing local congestion, so as to achieve the effects of expelling cold and dampness, removing stagnation, removing toxins and purging heat, promoting qi and blood circulation, unblocking meridians, reducing swelling and relieving pain.</p>
                            <p>Therefore, it can relieve fatigue, enhance physical fitness, cure and prevent diseases.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src={injectionImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Beauty injection</h2>
                            <p>Using needles as thin as hair, based on the theory of TCM meridian points and modern facial anatomy, the points or local facial muscle fascia are micro-stimulated to achieve the effects of lifting, firming, lightening spots, removing acne, removing wrinkles, and nourishing the skin.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src={moxibustionImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Moxibustion</h2>
                            <p>By burning moxa cones, moxa wool, moxa sticks, etc. made from moxa leaves, the acupuncture points of the human body can be fumigated and burned to achieve the purpose of warming the meridians and dispelling cold, promoting qi and unblocking collaterals, raising yang and lifting sunken, supporting yang and consolidating deficiency, and maintaining health.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src={massageImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Chinese Massage Therapy</h2>
                            <p>Under the guidance of traditional Chinese medicine theory, a treatment method that uses special techniques to act on specific parts of the patient's limbs and perform passive exercise.</p>
                            <p>It has the functions of harmonizing blood and qi, dredging meridians, and promoting metabolism, thereby achieving the effect of curing diseases and maintaining health.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src={painImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Pain Treatment</h2>
                            <p>In addition to using traditional Chinese medicine acupuncture, orthopedic surgery, and massage techniques to treat pain, our clinic is also equipped with modern advanced treatment equipment, such as electronic shock wave therapy equipment, medium frequency interference current therapy equipment, far infrared electromagnetic wave spectrum equipment, etc., combined with modern anatomical and neurological theories, for comprehensive integrated treatment.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src="/images/belly-tie.jpg" className="services-details-img" alt="image of belly tie demonstration"></img>
                        <div className="services-details-text">
                            <h2>Postpartum Rehabilitation (Rehabilitation Belly Tie)</h2>
                            <p>Pregnancy and childbirth often cause the pelvis to widen, the hips to widen, and the uterus to enlarge, which causes compression and displacement of internal organs, leading to the stretching and separation of the rectus abdominis muscles, resulting in postpartum low back pain and pelvic misalignment.</p>
                            <p>Through human body structure analysis, manual therapy, and abdominal piercing treatment, we can effectively reshape the body and improve problems such as low back pain, rectus abdominis separation, and pelvic misalignment.</p>
                        </div>
                    </div>
                    <div className="services-details">
                        <img src={tianjiuImg} className="services-details-img"></img>
                        <div className="services-details-text">
                            <h2>Tianjiu Therapy</h2>
                            <p>During the season with the most yang energy (dog days) and the season with the heaviest cold energy (nine days), Chinese medicine practitioners grind pungent and warm herbs into powder, add ginger juice and mix well before applying it to the prescribed acupoints.</p>
                            <p>Through the stimulation of acupuncture points by drugs, the effects of warming the meridians and dispelling cold can be achieved, the meridians can be unblocked, blood circulation and blood vessels can be activated, the functions of internal organs can be adjusted, the body's yang energy can be mobilized, and the body's immunity can be enhanced.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}