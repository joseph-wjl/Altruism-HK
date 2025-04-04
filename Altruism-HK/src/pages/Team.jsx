import React from 'react'
import { Link } from 'react-router-dom'
import './Team.css'

export default function Team(){
    return (
        <>
            <div className="team-container">
                <div className="team-header">
                    <h2>Our Team</h2>
                    <p>Altruism's team is led by Dr. Huang Lingling, a Chinese medicine practitioner. Together with a professional, experienced and reputable team of registered Chinese medicine practitioners and therapists, it combines traditional Chinese medicine wisdom with modern advanced equipment to provide personalized and comprehensive treatment plans that take both internal and external factors into consideration. With a comfortable environment and private rooms, it's perfect for those who are busy with work and looking to pursue better health.</p>
                </div>
                <div className="team-members">
                    <div id="dr-huang-img"></div>
                    {/* <img src="/images/dr-huang.avif"></img> */}
                    <h2>Dr. Huang Lingling (Phd)</h2>
                        <p>• Hong Kong Registered Chinese Medicine Practitioner (General Practitioner) R.C.M.P</p>
                        <p>• Registration number: 004684</p>
                        <p>• Doctor of Medicine, Southern Medical University, Guangzhou (Integrated Traditional Chinese and Western Medicine)</p>
                        <p>• Master of Chinese Medicine (Acupuncture) from the University of Hong Kong</p>
                </div>
                <div className="team-members">
                    <div id="dr-lai-img"></div>
                    {/* <img src="/images/dr-lai.avif"></img> */}
                    <h2>Dr. Li Wanling (Phd)</h2>
                        <p>• Hong Kong Registered Chinese Medicine Practitioner (General Practitioner) R.C.M.P</p>
                        <p>• Registration number: 005215</p>
                        <p>• Doctor of Medicine, Southern Medical University, Guangzhou (Integrated Traditional Chinese and Western Medicine)</p>
                        <p>• Master of Chinese Medicine, Baptist University</p>
                        <p>• Bachelor of Medicine, Jinan University</p>
                </div>
                <div className="team-members">
                    <div id="dr-huang2-img"></div>
                    {/* <img src="/images/dr-huang2.avif"></img> */}
                    <h2>Dr. Huang Tiancong</h2>
                        <p>• Hong Kong Registered Chinese Medicine Practitioner (General Practitioner) R.C.M.P</p>
                        <p>• Registration number: 002295</p>
                </div>
                <div className="team-members">
                    <div id="dr-cheung-img"></div>
                    {/* <img src="/images/dr-cheung.avif"></img> */}
                    <h2>Dr. Zhang Zongxian</h2>
                        <p>• Hong Kong Registered Chinese Medicine Practitioner (General Practitioner) R.C.M.P</p>
                        <p>• Registration number: 002356</p>
                        <p>• Master of Chinese Medicine (Acupuncture) from the University of Hong Kong</p>
                        <p>• Bachelor of Chinese Medicine, University of Hong Kong</p>
                        <p>• Certificate from Zhu's Scalp Nail Center (USA)</p>
                </div>
                <div className="team-members">
                    <div id="dr-lui-img"></div>
                    {/* <img src="/images/dr-lui.avif"></img> */}
                    <h2>Dr. Lu Jincong</h2>
                        <p>• Hong Kong Registered Chinese Medicine Practitioner (General Practitioner) R.C.M.P</p>
                        <p>• Registration number: 009960</p>
                        <p>• Bachelor of Chinese Medicine, The Chinese University of Hong Kong</p>
                </div>
                <div className="team-members">
                    <div id="therapist-wun-img"></div>
                    {/* <img src="/images/therapist-wun.avif"></img> */}
                    <h2>Comprehensive Therapist - Wun Yuk Ying</h2>
                        <p>• Diploma in Massage Therapy from Hong Kong Baptist University</p>
                        <p>• National vocational examination health massage instructor qualification</p>
                        <p>• Clinical Certificate of Orthopedics, Buddhist Huaxia College of Traditional Chinese Medicine</p>
                        <p>• Postpartum Restoration Specialist of Chinese Society of Traditional Chinese Medicine Information</p>
                        <p>• IAPC & TQUK Postpartum Belly Binding and Lactation Consultant Certificate</p>
                </div>
                <div className="team-members">
                    <div id="therapist-ng-img"></div>
                    {/* <img src="/images/therapist-ng.avif"></img> */}
                    <h2>Massage Therapist - Wu Yuhua</h2>
                        <p>• Master's degree from Southern Medical University</p>
                        <p>• Secretary General of Hong Kong Massage and Physiotherapy Professional Association</p>
                        <p>• Professional Qualification of Guangdong Vocational Skills Certification and Guidance Center</p>
                </div>
            </div> 
        </>
    )
}