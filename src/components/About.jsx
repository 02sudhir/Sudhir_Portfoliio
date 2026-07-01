import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
   Hi, I'm <b>Sudhir Amruskar</b>, a <b>Senior DevSecOps Engineer</b> with over <b>4+ years of experience</b> building <b>secure, scalable, and highly available cloud infrastructure</b> for <b>BFSI/NBFC organizations</b>. I specialize in designing <b>cloud-native platforms on AWS</b>, automating infrastructure using <b>Terraform</b>, building <b>Kubernetes (Amazon EKS)</b> environments, and implementing <b>enterprise CI/CD pipelines</b>.

My expertise extends beyond traditional DevOps into <b>DevSecOps</b>, where I focus on <b>Cloud Governance</b>, <b>AWS Organizations</b>, <b>AWS Guardrails</b>, <b>Wiz Cloud Security (CSPM)</b>, <b>VAPT Remediation</b>, <b>SOC Log Monitoring</b>, <b>Cloud Compliance</b>, and <b>Security Automation</b>. I enjoy solving <b>complex infrastructure challenges</b>, improving <b>deployment reliability</b>, and helping engineering teams deliver software faster without compromising <b>security, compliance, and reliability</b>.

I am passionate about <b>Automation</b>, <b>Platform Engineering</b>, <b>Cloud Security</b>, <b>Infrastructure as Code (IaC)</b>, <b>Kubernetes</b>, and <b>AI-powered cloud solutions using Amazon Bedrock</b>. I believe modern infrastructure should be <b>secure by design</b>, <b>fully automated</b>, <b>cost-efficient</b>, <b>scalable</b>, and <b>production-ready</b>.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
