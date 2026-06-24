import CourseDetail from "@/components/CourseDetail";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SSB Interview Coaching in Lucknow | SSB Screening, Psychology & GTO Training | PFDA",
    description: "Best SSB interview preparation in Lucknow at PFDA. Training by ex-SSB psychologists & GTOs. Complete SSB screening test, psychology test (TAT, WAT, SRT), GTO tasks & personal interview coaching.",
    keywords: ["SSB interview preparation", "SSB screening test", "SSB psychology test", "SSB GTO tasks", "SSB interview questions", "NDA SSB coaching in Lucknow", "SSB coaching Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/ssb" },
};

export default function SSBPage() {
    return (
        <CourseDetail
            title="SSB Interview Coaching"
            subtitle="Service Selection Board — 5-Day Assessment"
            image="/images/nda.jpeg"
            description="The SSB Interview is a 5-day personality assessment process conducted by the Service Selection Board to evaluate candidates for a career in the Indian Armed Forces. It tests your intelligence, personality, and Officer Like Qualities (OLQs) through psychological tests, group testing, and personal interviews. Path Finder Defence Academy provides the most authentic SSB interview preparation in Lucknow with an expert panel that includes ex-SSB psychologists, ex-GTOs, and ex-interviewing officers from actual Service Selection Boards. Our SSB coaching covers the complete process — from SSB screening test (OIR + PPDT) to SSB psychology tests, SSB GTO tasks, personal interview, and conference preparation."
            eligibility={[
                "Qualified in written exam (NDA, CDS, AFCAT, CAPF conducted by UPSC)",
                "Or Direct Entry (TES, TGC, SSC Tech, NCC Special Entry, JAG Entry)"
            ]}
            syllabus={[
                "SSB Screening Test — OIR (Officer Intelligence Rating) + PPDT (Picture Perception & Discussion Test)",
                "SSB Psychology Tests — TAT (Thematic Apperception Test), WAT (Word Association Test), SRT (Situation Reaction Test), Self Description",
                "SSB GTO Tasks — Group Discussion, GPE (Group Planning Exercise), PGT, HGT, Command Task, Snake Race, Lecturette",
                "Personal Interview — In-depth assessment by Interviewing Officer",
                "Conference — Final board assessment"
            ]}
            duration="14 Days / 21 Days"
            batchTiming="Full Day Training (8 AM - 5 PM)"
        >
            {/* SSB Panel Section */}
            <section className="container mx-auto px-4 py-16 border-t border-white/5">
                <div className="mb-12">
                    <SectionHeading title="SSB Panel" alignment="center" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {[
                        {
                            name: "MAJ. GEN. S.K. SINGH",
                            role: "EX. PSYCHOLOGIST, EX. COMMANDANT, KAPURTHALA SSB",
                            quote: "Veteran Major General SK Singh is an alumni of NDA and IMA. He was Commissioned into the Regiment of Artillery in Jun 1981. He is also an Army Aviator and Qualified Flying Instructor. He participated in all operations of the Indian Army since 1981. As Commandant Service Selection Centre he conceived and established Service Selection Centre North (SSCN) with 31 and 32 SSB under him. The success rate of SSCN during his tenure was the best amongst all Selection Centres.",
                            image: "/images/sksingh.jpeg"
                        },
                        {
                            name: "COL. ASHOK PATHAK",
                            role: "EX GTO ALLAHABAD & BHOPAL SSB",
                            quote: "We truly believe that any serious student can succeed if they get the right guidance. As mentors, our job is to teach discipline, help students stay strong during tough times, and develop leadership qualities. We prepare them not only to clear exams, but to live the life of an officer.",
                            image: "/images/ashokpathak.jpeg"
                        },
                        {
                            name: "COL. PRAVEEN KUMAR",
                            role: "EX. I.O. & EX INSTRUCTOR OF NDA & IMA",
                            quote: "My Self Colonel [Retd.] Praveen K. Srivastava has been a senior NDA & IMA Instructor for approx 15 years. During my tenure of 15 years thousands of gentleman cadets were commissioned as an officer. Presently I am associated with PATHFINDER DEFENCE ACADEMY as ACADEMIC ADVISOR & INTERVIEWING OFFICER FOR Training Defence forces aspirants.\nI also assist in the coaching of candidates for the selection process stage I i.e. known as screening test. SCREENING TEST is the most important part of the whole selection process [ Including OIRT & PP & DT ].",
                            image: "/images/praveensrivastava.jpeg"
                        },
                        {
                            name: "GP CPT. L.K. PANDEY",
                            role: "EX PSYCHOLOGIST, DEPUTY PRESIDENT VARANASI (AFSB), DEHRADUN (AFSB), MYSORE (2AFSB), ALLAHABAD (14 SSB)",
                            quote: "Gp Capt LK Pandey was posted as psychologist officers in Dehradun AFSB, Mysore AFSB, Varanasi AFSB & Allahabad SSB. During the tenure of Varanasi AFSB I was deputy president of 4 AFSB. Dear candidate, be brave, be bold, dare and so on. Nothing will be impossible, no obstacle is insurmountable. Once your mind is made up and you stand firm as a rock, no one can stop you from gaining your goal and crowning yourself with success. Dear students, if you have passed 12th and are looking for a career in defence join Pathfinder defence academy, we promise a dynamic career in the Indian armed forces with your effort and our guidance. Our aim is, every student should get success in his life. Success comes when you know what you want or desire. The starting point then is to know what you want to do in life. Let your ambitions come true. Never mind and never fear. What appears impossible today will become a reality tomorrow, with your determination, dedication and devotion, the man who wins is the man who thinks he can, Pathfinder defence academy leads you on the road to success.",
                            image: "/images/lkpandey.jpeg"
                        },
                        {
                            name: "GP. CAPT. A.K. SRIVASTAVA",
                            role: "EX PSYCHOLOGIST VARANASI 4AFSB, MYSORE 2AFSB",
                            quote: "Gp Capt ak Srivastava was posted as a psychologist 2 & 4AFSB. He was also posted as an instructor and counsellor at Airforce academy Hyderabad (twice) and recruiting officer and head research wing at central airmen selection board (CASB). He did his post graduate In Psychology from Gorakhpur University and also did his super specialisation in DEFENCE MECHANISM TEST (DMT). He is the author AHAM - AAVAAM - VAYAM ( THE MOST AUTHENTIC BOOK ON THE CONCEPT AND TEST AT SSBs. THE BOOKS IS SPECIALLY SUITABLE FOR REPEATERS).",
                            image: "/images/aksrivastava.jpeg"
                        },
                        {
                            name: "A.C. SARVESH TRIPATHI",
                            role: "EX ASSISTANT COMMANDANT CRPF",
                            quote: "Assistant commandant sarvesh kumar tripathi was posted in CRPF for more than 10years. During his tenure he was posted in the naxalite area of Chattisgarh and the highly insurgent area of JAMMU & KASHMIR. He was a highly decorated officer of CRPF. He took volunteer retirement from the post of assistant commandant & he is taking classes of paper 2 & interview section of CAPF ac.",
                            image: "/images/serveshtripathi.jpeg"
                        }
                    ].map((panel, index) => (
                        <div key={index} className="relative mt-2 ml-2">
                            {/* Gold Underlay */}
                            <div className="absolute inset-0 bg-gold rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md transform -translate-x-2 -translate-y-2 -z-10"></div>
                            
                            {/* Main Card */}
                            <div className="bg-[#1B2620] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start h-full w-full relative z-10 shadow-xl">
                                {/* Image */}
                                <div className="shrink-0">
                                    <img 
                                        src={panel.image} 
                                        alt={panel.name} 
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain object-top border border-gold bg-black/10 rounded-sm"
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center md:text-left">
                                    <h3 className="text-gold text-xl md:text-2xl font-black uppercase tracking-wider mb-1">
                                        {panel.name}
                                    </h3>
                                    <p className="text-gold font-bold italic uppercase text-xs md:text-sm mb-4">
                                        {panel.role}
                                    </p>
                                    <p className="text-gray-200 italic text-sm md:text-base leading-relaxed">
                                        &quot;{panel.quote}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </CourseDetail>
    );
}
