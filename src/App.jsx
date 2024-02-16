import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import FullStackDevelopment from "./component/FullStackDevelopment";
import DataScience from "./component/DataScience";
import CyberSecurity from "./component/CyberSecurity";
import Career from "./component/Career";
import NaveBar from "./component/NaveBar";

const App = () => {
  let data = [
    {
      image:
        "https://c8.alamy.com/comp/2RDKCHJ/full-stack-developer-flat-vector-illustration-suitable-for-web-banners-infographics-book-social-media-and-other-graphic-assets-2RDKCHJ.jpg",
      Title: "Full Stack Development",
      numberOfMonths: 3,
      description:"Utilizes programming languages like Python, Ruby, Java, PHP, or JavaScript (Node.js) for server-side development."    },
    {
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/web-development-647_062317054646.jpg?size=690:388",
      Title: "Full Stack Development",
      numberOfMonths: 3,
      description:"Involves working on the server-side of the application, dealing with databases, server logic, and server configuration. the FSD"    },
    {
      image:
        "https://tvup.media/wp-content/uploads/2019/07/0_HICLyAdNSIyT0ODU.jpg",
      Title: "Full Stack Development",
      numberOfMonths: 3,
      description:"Includes HTML, CSS, and JavaScript for building user interfaces and ensuring a responsive and visually appealing design."    },
    {
      image:
        "https://cdn.pixabay.com/photo/2022/07/08/05/38/freelance-work-7308505_1280.png",
      Title: "Full Stack Development",
      numberOfMonths: 3,
      description:"Involves working on the client-side of the application, i.e., the part of the application that users interact with directly.Now learn Fsd"    },
    {
      image:
        "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18135.jpg",
      Title: "Data Science",
      numberOfMonths: 3,
      description:
        "Data science is the study of data to extract meaningful insights for business.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_640.jpg",
      Title: "Data Science",
      numberOfMonths: 3,
      description: "Using tools like Tableau or Matplotlib to create charts, graphs, and dashboards.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/revenue-operations-collage_23-2150847854.jpg",
      Title: "Data Science",
      numberOfMonths: 3,
      description:
        "Analyzing and visualizing data to understand patterns, trends, and relationships.",
    },
    {
      image:
        "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18140.jpg",
      Title: "Data Science",
      numberOfMonths: 3,
      description:
        "Preparing data for analysis by handling missing values and transforming variables.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1331943958/photo/digital-cloud-security-background-concept.jpg?s=612x612&w=0&k=20&c=ktHShoivHgGcXbkgJGUpy6Q5JLYKMGsrbpY0e_4MrSc=",
      Title: "Cyber Security",
      numberOfMonths: 3,
      description:
        "Granting appropriate permissions based on user roles and responsibilities.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.jpg?s=612x612&w=0&k=20&c=8wFwFVMOpW9gF2GTOx0vagIKDaw3YNFnBVbYCmoTUSY=",
      Title: "Cyber Security",
      numberOfMonths: 3,
      description:
        "Verifying the identity of users or systems to prevent unauthorized access.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1350595566/photo/cyber-security-firewall-interface-protection-concept-businesswoman-protecting-herself-from.jpg?s=612x612&w=0&k=20&c=9i4-mWszc5FRU_iaI3ISHkmJKHn1ZCfhWjechO4H9NY=",
      Title: "Cyber Security",
      numberOfMonths: 3,
      description:
        "Ensuring that systems and data are accessible and operational when needed.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1456739978/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.jpg?s=2048x2048&w=is&k=20&c=I1eHmzNE7WXWYeC8_abptOHD5qSmPRE41YUEKBzdjUQ=",
      Title: "Cyber Security",
      numberOfMonths: 3,
      description:
        "Protecting sensitive information from unauthorized access or disclosure.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/business-people-rushing-towards-success_53876-65643.jpg",
      Title: "Career",
      numberOfMonths: 3,
      description:
        "Reflect on your continuous growth and learning in your chosen field.",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/career-woman-using-her-smartphone-600nw-1186179382.jpg",
      Title: "Career",
      numberOfMonths: 3,
      description:
        "Identify notable accomplishments or milestones in your career.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/top-view-career-written-note-with-stickers-notepad-white-background-job-office-copybook-salary-college-business-color_179666-19734.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707955200&semt=sph",
      Title: "Career",
      numberOfMonths: 3,
      description:
        "Emphasize the lessons learned from both successes and setbacks.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1254605550/vector/composition-with-group-of-multiracial-employees.jpg?s=612x612&w=0&k=20&c=VBiX5R0vNRnphyqmIbo2Yi-uo5o5nxQJcdyLMcNDBw0=",
      Title: "Career",
      numberOfMonths: 3,
      description:
        "Highlight promotions, successful projects, or any recognition you've received.",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <div>
          <NaveBar />
        </div>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route
            path="/fullstackdevelopment"
            element={<FullStackDevelopment data={data} />}
          />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route
            path="/cybersecurity"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
<h1>app comp</h1>;
