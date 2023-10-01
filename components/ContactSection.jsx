import {
  ExternalLink,
  Globe,
  Home,
  Link,
  Mail,
  PenTool,
  Phone,
  Store,
  Workflow,
} from "lucide-react";
import ContactForm from "./ContactForm";
import Copyer from "./Copyer";

const ContactSection = () => {
  return (
    <>
      <h1 className="text-center mb-8 text-lg font-semibold text-indigo-500">
        Kontakta Oss
      </h1>
      <div className="flex justify-center w-full px-4 ">
        <main className="flex items-center gap-8 container w-[1200px] flex-col md:flex-row">
          <section className=" w-full md:w-1/2 ">
            <div className="w-full md:px-6 lg:px-8">
              <h1 className="font-bold text-3xl mb-8">
                Fragor om boende och placering
              </h1>
              <p className="font-medium text-gray-500 leading-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                voluptatem porro iusto quae! Voluptatem necessitatibus aliquid
                eveniet ut earum.
              </p>
              <div className="text-gray-500 font-medium">
                <div className="mb-12">
                  <h3 className="text-base font-medium text-indigo-500 mb-4">
                    For title two
                  </h3>
                  {contactOneData.map((item) => (
                    <div className="flex items-center mb-5">
                      <item.icon className="w-5 h-5 mr-6" />
                      <p href="#" className="mr-2">
                        {item.label}
                      </p>
                      <Copyer input={item.copy} />
                      {item.link && (
                        <a
                          href={item.link}
                          className="p-1 border rounded-md ml-2 text-gray-500 hover:bg-gray-100">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <h3 className="text-base font-medium text-indigo-500 mb-4">
                    For title one
                  </h3>
                  {contactTwoData.map((item) => (
                    <div className="flex items-center mb-5">
                      <item.icon className="w-5 h-5 mr-6" />
                      <p href="#" className="mr-2">
                        {item.label}
                      </p>
                      <Copyer input={item.copy} />
                      {item.link && (
                        <a
                          href={item.link}
                          className="p-1 border rounded-md ml-2 text-gray-500 hover:bg-gray-100">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className=" w-full md:w-1/2">
            <ContactForm />
          </section>
        </main>
      </div>
    </>
  );
};

const contactOneData = [
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    icon: Globe,
  },
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    link: "#",
    icon: Phone,
  },
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    icon: Mail,
  },
];
const contactTwoData = [
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    link: "#",
    icon: Workflow,
  },
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    icon: Store,
  },
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    link: "#",
    icon: Home,
  },
  {
    label: "Voluptatem necessitatibus aliquid",
    copy: "#none",
    link: "#",
    icon: PenTool,
  },
];

export default ContactSection;
