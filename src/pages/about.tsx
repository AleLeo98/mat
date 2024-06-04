import * as React from "react";
import Image from 'next/image';

const AboutPage: React.FC = () => {
  // Removed references to b.io images
  const localMatLogoPath = "/path/to/local/MATLogo.png"; // Update this path to where your logo is stored locally
  const localVercelIconPath = "/path/to/local/vercel.svg"; // Update this path to where your icon is stored locally

  return (
    <div className="flex flex-col bg-white">
      {/* Header Section */}
      <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 bg-white border-0 border-solid border-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <Image loading="lazy" src={localMatLogoPath} width={63} height={28} className="shrink-0 self-stretch my-auto aspect-[2.33] w-[63px]" alt="Logo" />
          <div className="flex gap-5 justify-between self-stretch my-auto text-sky-950">
            <div>Link One</div>
            <div>Link Two</div>
            <div>Link Three</div>
            <div className="flex gap-1 justify-center">
              <div>Link Four</div>
              <Image loading="lazy" src={localVercelIconPath} width={24} height={24} className="shrink-0 w-6 aspect-square" alt="Icon" />
            </div>
          </div>
          <div className="justify-center self-stretch px-7 py-2 text-white whitespace-nowrap border border-solid bg-sky-950 border-sky-950 rounded-[500px] max-md:px-5">
            Button
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 text-base font-semibold leading-6 text-center text-sky-950">Gender Bias in Education</div>
        <div className="mt-4 text-5xl font-bold text-center leading-[58px] text-sky-950 w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">Promoting Awareness Through an Engaging Game</div>
        <div className="mt-6 text-lg leading-7 text-center text-sky-950 w-[768px] max-md:max-w-full">One effective way to address gender biases among teachers is through an engaging and interactive memory game. By presenting descriptions of children without revealing their associated genders, the game prompts reflection on unconscious gender associations. This blog section explores how the Memory Awareness Tool (MAT) aims to promote awareness of gender biases in education.</div>

        {/* Articles Section */}
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ArticleCard
              imageSrc="/path/to/local/articleImage1.jpg" // Update this path to where your article image is stored locally
              category="Education, Gender Bias"
              title="The Impact of Gender Bias in Education"
              description="Learn about the profound impact of gender biases in education and how it can shape children's experiences and opportunities."
              authorName="John Doe"
              authorImage="/path/to/local/authorImage1.jpg" // Update this path to where your author image is stored locally
              date="August 15, 2022"
              readTime="5 minutes"
            />
            {/* Repeat for other ArticleCards, ensuring all imageSrc and authorImage paths are updated */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="justify-center px-8 py-3 mt-16 mb-2.5 text-base leading-6 border border-solid border-sky-950 rounded-[500px] text-sky-950 max-md:px-5 max-md:mt-10">
          Play the Memory Awareness Tool
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col pt-20 w-full bg-white max-md:max-w-full">
        <div className="flex flex-col items-start px-16 mt-8 w-full max-md:px-5 max-md:max-w-full">
          <div className="text-5xl font-bold leading-[58px] text-sky-950 w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            MAT objective aims to promote awareness of gender biases among teachers through an engaging and interactive memory game. By presenting teachers with descriptions of children, while concealing the associated genders, MAT prompts reflection on the unconscious associations individuals may hold between gender and various characteristics or attributes.
          </div>
          <div className="mt-6 text-lg leading-7 text-sky-950 max-md:max-w-full">Frequently Asked Questions</div>
          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <FAQSection
                question="What is MAT?"
                answer="MAT is an objective aims to promote awareness of gender biases among teachers through an engaging and interactive memory game. By presenting teachers with descriptions of children, while concealing the associated genders, MAT prompts reflection on the unconscious associations individuals may hold between gender and various characteristics or attributes."
              />
              <FAQSection
                question="How does MAT work?"
                answer="MAT works by presenting teachers with descriptions of children, while concealing the associated genders. The teachers then have to match the descriptions with the corresponding children, challenging their unconscious associations between gender and various characteristics or attributes."
              />
              <FAQSection
                question="Who can use MAT?"
                answer="MAT can be used by teachers who want to promote awareness of gender biases in their classrooms. It can also be used by educational institutions and organizations that are dedicated to promoting gender equality in education."
              />
              <FAQSection
                question="Is MAT suitable for all age groups?"
                answer="MAT is designed for teachers working with children of all age groups. The game can be adapted to suit different age ranges and educational settings, making it suitable for a wide range of classrooms."
              />
              <FAQSection
                question="Can MAT be customized?"
                answer="Yes, MAT can be customized to suit the specific needs of different teachers and classrooms. The game can be modified to include specific descriptions and characteristics that are relevant to the educational context."
              />
              <FAQSection
                question="How can I access MAT?"
                answer="MAT can be accessed through our website. Simply visit our website and sign up to create an account. Once you have an account, you will be able to access and play the game."
              />
              <FAQSection
                question="Is MAT available for mobile devices?"
                answer="Yes, MAT is available for both desktop and mobile devices. You can access the game through our website using any device with internet connectivity."
              />
              <FAQSection
                question="How can I get support for MAT?"
                answer="If you need any support or have any questions about MAT, please reach out to our customer support team. You can contact them through email or by filling out the contact form on our website."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex z-10 flex-col px-16 pt-20 mt-0 w-full bg-white max-md:px-5 max-md:mt-0 max-md:max-w-full">
        <div className="pb-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="pt-12 pb-20 text-base leading-6 text-sky-950 max-md:mt-10 max-md:max-w-full">Privacy Policy</div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <FooterLinkSection links={["X", "LinkedIn", "Youtube"]} />
                  <FooterLinkSection links={["Link 8", "Link 9", "Link 10"]} />
                  <FooterLinkSection links={["X", "LinkedIn", "Youtube"]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ContactSection />
            <PolicySection policies={["Privacy Policy", "Terms of Service", "Cookies Settings"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ArticleCard Component
const ArticleCard: React.FC<{
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  authorName: string;
  authorImage: string;
  date: string;
  readTime: string;
}> = ({ imageSrc, category, title, description, authorName, authorImage, date, readTime }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-sm leading-5 border border-solid border-sky-950 text-sky-950 max-md:mt-8">
      <Image loading="lazy" src={imageSrc} width={500} height={360} className="w-full aspect-[1.39]" alt="Article Image" />
      <div className="flex flex-col p-6 max-md:px-5">
        <div className="font-semibold">{category}</div>
        <div className="mt-2 text-2xl font-bold leading-9">{title}</div>
        <div className="mt-2 text-base leading-6">{description}</div>
        <div className="flex gap-4 mt-6">
          <Image loading="lazy" src={authorImage} width={48} height={48} className="shrink-0 w-12 aspect-square" alt="Author Image" />
          <div className="flex flex-col flex-1">
            <div className="font-semibold">{authorName}</div>
            <div className="flex gap-2 items-center">
              <div className="self-stretch my-auto">{date}</div>
              <div className="self-stretch text-lg">•</div>
              <div className="self-stretch my-auto">{readTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// FAQSection Component
const FAQSection: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-lg font-bold leading-7 text-sky-950 max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">{question}</div>
      <div className="mt-4 text-base leading-6 max-md:max-w-full">{answer}</div>
    </div>
  </div>
);

// FooterLinkSection Component
const FooterLinkSection: React.FC<{ links: string[] }> = ({ links }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col pt-20 pb-2 text-sm leading-5 text-sky-950 max-md:mt-10">
      {links.map((link, index) => (
        <div key={index} className="mt-4">
          {link}
        </div>
      ))}
    </div>
  </div>
);

// ContactSection Component
const ContactSection: React.FC = () => (
  <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-sky-950 max-md:max-w-full">
      <div className="text-3xl font-bold leading-10 max-md:max-w-full">Still have questions?</div>
      <div className="mt-4 text-lg leading-7 max-md:max-w-full">
        If you still have questions about MAT or need further assistance, please feel free to reach out to us. We are here to help!
      </div>
      <div className="justify-center self-start px-8 pt-3 mt-6 text-base leading-6 whitespace-nowrap border border-solid border-sky-950 rounded-[500px] max-md:px-5">
        Contact
      </div>
    </div>
  </div>
);

// PolicySection Component
const PolicySection: React.FC<{ policies: string[] }> = ({ policies }) => (
  <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col items-end px-16 pt-8 mt-8 text-sm font-medium leading-5 text-sky-950 max-md:max-w-full">
      <div className="flex gap-5 justify-between">
        {policies.map((policy, index) => (
          <div key={index} className="underline">
            {policy}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;