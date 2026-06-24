import BlogArticle from "@/components/BlogArticle";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDA vs CDS — Which Defence Exam Should You Choose? | PFDA Lucknow",
    description: "Detailed comparison of NDA vs CDS exam — eligibility, age limit, syllabus, exam pattern, training & career prospects. Find out which defence exam is best after graduation. Expert analysis by PFDA.",
    keywords: ["NDA vs CDS difference", "which defence exam is best after graduation", "NDA vs CDS eligibility", "defence career options after graduation", "NDA or CDS which is better"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/blog/nda-vs-cds" },
};

export default function NDAVsCDS() {
    return (
        <BlogArticle
            title="NDA vs CDS — Which Defence Exam Should You Choose?"
            date="May 28, 2025"
            readTime="8 min"
            heroImage="/images/gallery8.jpg"
        >
            <p>
                Two of the most popular defence exams in India are NDA (National Defence Academy) and CDS (Combined Defence Services). Both are conducted by UPSC, both lead to officer-level commissions in the Indian Armed Forces, but they differ significantly in eligibility, exam pattern, and career trajectory. If you are confused about the <strong>NDA vs CDS difference</strong>, this detailed comparison will help you decide.
            </p>

            <h2>Basic Difference: NDA vs CDS</h2>

            <h3>NDA (National Defence Academy)</h3>
            <ul>
                <li><strong>For:</strong> 12th pass or appearing students</li>
                <li><strong>Age:</strong> 16.5 to 19.5 years</li>
                <li><strong>Training:</strong> 3 years at NDA Pune + 1 year at respective service academy</li>
                <li><strong>Service:</strong> Army, Navy, Air Force</li>
                <li><strong>Conducted by:</strong> UPSC (twice a year — April & September)</li>
            </ul>

            <h3>CDS (Combined Defence Services)</h3>
            <ul>
                <li><strong>For:</strong> Graduates</li>
                <li><strong>Age:</strong> 19 to 25 years (varies by academy)</li>
                <li><strong>Training:</strong> Direct entry to IMA (18 months), OTA (11 months), INA (varies), AFA (varies)</li>
                <li><strong>Service:</strong> Army (IMA/OTA), Navy (INA), Air Force (AFA)</li>
                <li><strong>Conducted by:</strong> UPSC (twice a year — April & September)</li>
            </ul>

            <h2>Exam Pattern Comparison</h2>

            <h3>NDA Exam Pattern</h3>
            <ul>
                <li><strong>Paper I — Mathematics:</strong> 300 marks (120 questions, 2.5 hours)</li>
                <li><strong>Paper II — GAT:</strong> 600 marks (150 questions, 2.5 hours) — English + General Knowledge</li>
                <li><strong>Total:</strong> 900 marks</li>
                <li><strong>Negative Marking:</strong> Yes (1/3 of marks for wrong answer)</li>
            </ul>

            <h3>CDS Exam Pattern</h3>
            <ul>
                <li><strong>Paper I — English:</strong> 100 marks (2 hours)</li>
                <li><strong>Paper II — General Knowledge:</strong> 100 marks (2 hours)</li>
                <li><strong>Paper III — Elementary Mathematics:</strong> 100 marks (2 hours) — only for IMA & AFA</li>
                <li><strong>Total:</strong> 300 marks (IMA/AFA) or 200 marks (OTA/INA)</li>
                <li><strong>Negative Marking:</strong> Yes (1/3 of marks for wrong answer)</li>
            </ul>

            <h2>Which Exam Is Harder?</h2>
            <p>
                NDA Mathematics is generally considered more difficult than CDS Elementary Mathematics because it covers Class 11th-12th level topics including Calculus, Matrices, and Vector Algebra. CDS Maths is up to Class 10th level. However, CDS General Knowledge paper is broader and more current-affairs focused.
            </p>

            <h2>Career Prospects</h2>
            <p>
                Both NDA and CDS lead to Permanent Commission as officers. However, NDA officers are considered more prestigious because:
            </p>
            <ul>
                <li>NDA provides 4 years of rigorous training (longest in the world)</li>
                <li>NDA cadets graduate with a degree from Jawaharlal Nehru University</li>
                <li>NDA builds stronger camaraderie through joint training of all three services</li>
            </ul>
            <p>
                CDS (via OTA) offers Short Service Commission initially, which can be converted to Permanent Commission based on vacancies and performance.
            </p>

            <h2>Which Defence Exam Is Best After Graduation?</h2>
            <p>
                If you have already completed graduation, CDS is the natural choice. However, graduates also have other options:
            </p>
            <ul>
                <li><strong>AFCAT</strong> — specifically for Air Force officer entry</li>
                <li><strong>CAPF AC</strong> — for paramilitary officer entry (BSF, CRPF, CISF, ITBP)</li>
                <li><strong>Territorial Army</strong> — for working professionals who want to serve part-time</li>
                <li><strong>SSC Tech</strong> — for engineering graduates</li>
            </ul>

            <h2>Our Recommendation</h2>
            <p>
                <strong>If you are in Class 11th/12th:</strong> Focus on NDA. Start with our NDA Foundation Course for the best preparation.
            </p>
            <p>
                <strong>If you are a graduate:</strong> Prepare for CDS, AFCAT, and CAPF simultaneously — the General Knowledge and English preparation overlaps significantly.
            </p>
            <p>
                At Path Finder Defence Academy, we offer dedicated coaching for both NDA and CDS in Lucknow, with expert faculty and comprehensive study material tailored for each exam.
            </p>
        </BlogArticle>
    );
}
