import msBahavanaMS from '../../staticFiles/bhavana.jpeg';
import profPANDURANGAPPA from "../../staticFiles/pandurangappa.jpeg";
import arokiaPaul from "../../staticFiles/arokia_paul.jpeg";
import sereenaRose from "../../staticFiles/sereena_rose.jpeg";
import aadithiyab from "../../staticFiles/aadithiyab.jpeg";

const time = 'T15:00:00';

const speakerInfo = [
    {
        day: "Day 1",
        date:"01/01/1999",
        name: "MS.Bhavana",
        title: "UI & UX Design",
        role: "UI & UX Engineer At Renesas - Canada",
        image: msBahavanaMS,
        date: new Date(`2025-03-10${time}`),
        description: "This session covers the fundamental concepts of Artificial Intelligence and Machine Learning. Participants will learn about the historical development of AI, key algorithms, and practical applications in various domains. The session also explores the ethical considerations and future directions of AI technology."
    },
    {
        day: "Day 2",
        date:"01/01/1999",
        name: "PROF. PANDURANGAAPPA H",
        title: "5G Technologies & Beyond",
        role: "Don Bosco Institute of Management Studies & Computer Applications",
        image: profPANDURANGAPPA,
        date: new Date(`2025-03-11${time}`),
        description: "This session covers the fundamental concepts of Artificial Intelligence and Machine Learning. Participants will learn about the historical development of AI, key algorithms, and practical applications in various domains. The session also explores the ethical considerations and future directions of AI technology."
    },
    {
        day: "Day 3",
        date:"01/01/1999",
        name: "DR. Adithya Pothan Raj. V",
        title: "People-Centric AI In Emerging Technologies",
        role: "Lead Architect - Cognizant Technology Solutions - Canada",
        image: aadithiyab,
        date: new Date(`2025-03-12${time}`),
        description: "This session covers the fundamental concepts of Artificial Intelligence and Machine Learning. Participants will learn about the historical development of AI, key algorithms, and practical applications in various domains. The session also explores the ethical considerations and future directions of AI technology."
    },
    {
        day: "Day 4",
        date:"01/01/1999",
        name: "DR Arokia Paul Rajan R",
        title: "AWS Essentials: Your Launchpad to the cloud",
        role: "Professor at Christ University Lavasa Campus-Pune",
        image: arokiaPaul,
        date: new Date(`2025-03-13${time}`),
        description: "This session covers the fundamental concepts of Artificial Intelligence and Machine Learning. Participants will learn about the historical development of AI, key algorithms, and practical applications in various domains. The session also explores the ethical considerations and future directions of AI technology."
    },
    {
        day: "Day 5",
        date: "01/01/9999",
        name: "DR. Sareena Rose",
        title: "Machine Learning in Cybersecurity - Intrusion Detection, Malware Classification",
        role: "HOD - Department of Computer Science Vimal College Thrissur",
        image: sereenaRose,
        date: new Date(`2025-03-14${time}`),
        description: "This session covers the fundamental concepts of Artificial Intelligence and Machine Learning. Participants will learn about the historical development of AI, key algorithms, and practical applications in various domains. The session also explores the ethical considerations and future directions of AI technology."
    },
]

export default speakerInfo;