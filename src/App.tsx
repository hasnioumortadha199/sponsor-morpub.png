import "./App.css";
import {
  FaBullhorn,
  FaHashtag,
  FaCamera,
  FaVideo,
  FaPalette,
  FaPrint,
  FaCode,
  FaMobileAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaGlobe,
  FaArrowRight,
  FaFilePdf,
  FaCheckCircle,
} from "react-icons/fa";

export default function App() {
  const agency = {
    name: "MorPub",
    logo: "/logo-morpub.png",
    badge: "Agence digitale créative",
    headline: "MorPub, l’agence qui transforme vos idées en impact",
    subtitle:
      "Marketing digital, création visuelle, sponsorisation, développement web et solutions créatives pour les marques ambitieuses.",
    description:
      "MorPub accompagne les entreprises avec des solutions modernes en communication, publicité, contenu visuel, impression et développement digital.",
    sponsorPdf: "/pack-sponsor.pdf",
    phone: "+213779215955",
    whatsapp: "213770733069",
    email: "morpub19@gmail.com",
    instagram: "https://www.instagram.com/morpub19?igsh=MXZva2YxMHFsMWJqMw==",
    facebook: "https://www.facebook.com/morpub",
    tiktok: "https://www.tiktok.com/@morpub",
    website: "https://morpub.com",
    stats: [
      { value: "360°", label: "Vision créative" },
      { value: "Multi", label: "Services intégrés" },
      { value: "Impact", label: "Orientation résultats" },
    ],
  };

  const services = [
    {
      title: "Marketing digital",
      text: "Des stratégies modernes pour développer votre visibilité, votre image et vos résultats.",
      icon: <FaBullhorn />,
    },
    {
      title: "Sponsor & campagnes publicitaires",
      text: "Des campagnes sponsorisées conçues pour générer portée, engagement et performance.",
      icon: <FaHashtag />,
    },
    {
      title: "Gestion des réseaux sociaux",
      text: "Une présence digitale professionnelle avec des contenus cohérents, créatifs et efficaces.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Photographie & vidéographie",
      text: "Des visuels premium pour mettre en valeur votre entreprise, vos produits et vos services.",
      icon: (
        <div className="serviceIconStack">
          <FaCamera />
          <FaVideo />
        </div>
      ),
    },
    {
      title: "Design & impression",
      text: "Des supports graphiques et imprimés de qualité pour renforcer votre communication.",
      icon: (
        <div className="serviceIconStack">
          <FaPalette />
          <FaPrint />
        </div>
      ),
    },
    {
      title: "Développement web & mobile",
      text: "Des sites web et applications sur mesure pour accompagner la croissance de votre activité.",
      icon: (
        <div className="serviceIconStack">
          <FaCode />
          <FaMobileAlt />
        </div>
      ),
    },
  ];

  const reasons = [
    "Une approche créative alignée sur vos objectifs business.",
    "Une qualité visuelle premium pour renforcer votre image de marque.",
    "Des solutions personnalisées selon votre activité et votre audience.",
    "Une exécution orientée performance, cohérence et impact.",
  ];

  const contacts = [
    {
      label: "Téléphone",
      value: agency.phone,
      href: `tel:${agency.phone}`,
      icon: <FaPhoneAlt />,
    },
    {
      label: "WhatsApp",
      value: "Discuter maintenant",
      href: `https://wa.me/${agency.whatsapp}`,
      icon: <FaWhatsapp />,
      external: true,
    },
    {
      label: "Email",
      value: agency.email,
      href: `mailto:${agency.email}`,
      icon: <FaEnvelope />,
    },
    {
      label: "Instagram",
      value: "@morpub",
      href: agency.instagram,
      icon: <FaInstagram />,
      external: true,
    },
    {
      label: "Facebook",
      value: "MorPub",
      href: agency.facebook,
      icon: <FaFacebookF />,
      external: true,
    },
    {
      label: "TikTok",
      value: "@morpub",
      href: agency.tiktok,
      icon: <FaTiktok />,
      external: true,
    },
    {
      label: "Site web",
      value: "morpub.com",
      href: agency.website,
      icon: <FaGlobe />,
      external: true,
    },
  ];

  return (
    <div className="page">
      <div className="bgOrb bgOrbOne" />
      <div className="bgOrb bgOrbTwo" />

      <main className="container">
        <section className="hero">
          <div className="heroContent">
            <span className="heroBadge">{agency.badge}</span>

            <div className="brandRow">
              <div className="brandLogoWrap">
                <img
                  src={agency.logo}
                  alt={agency.name}
                  className="brandLogoImage"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div>
                <p className="brandName">{agency.name}</p>
                <p className="brandTag">Agence marketing & création digitale</p>
              </div>
            </div>

            <h1>{agency.headline}</h1>
            <p className="heroSubtitle">{agency.subtitle}</p>
            <p className="heroDescription">{agency.description}</p>

            <div className="heroActions">
              <a href="#contact" className="btnSecondary">
                <span>Nous contacter</span>
                <FaArrowRight />
              </a>

              <a
                href={agency.sponsorPdf}
                target="_blank"
                rel="noreferrer"
                className="btnSponsor"
              >
                <FaFilePdf />
                <span>Voir le pack sponsor PDF</span>
              </a>
            </div>

            <div className="statsGrid">
              {agency.stats.map((item) => (
                <div key={item.label} className="statCard">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="heroVisual">
            <div className="visualPanel">
              <div className="visualCard visualMain">
                <span>Branding</span>
                <strong>Identité moderne & impactante</strong>
              </div>

              <div className="visualCard visualAlt">
                <span>Ads & Sponsor</span>
                <strong>Campagnes pensées pour la performance</strong>
              </div>

              <div className="visualCard visualDark">
                <span>Web & Mobile</span>
                <strong>Des solutions digitales sur mesure</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeading">
            <span className="sectionBadge">Services</span>
            <h2>Des solutions créatives pour développer votre présence</h2>
            <p>
              MorPub accompagne les entreprises avec une offre complète en
              marketing, contenu visuel, sponsorisation, design et digital.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article key={service.title} className="serviceCard">
                <div className="serviceIcon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section twoCols">
          <div className="aboutCard">
            <span className="sectionBadge">Pourquoi MorPub</span>
            <h2>Une agence pensée pour la visibilité, l’image et la croissance</h2>
            <p>
              Nous combinons stratégie, créativité et exécution pour proposer
              des solutions modernes, crédibles et adaptées aux besoins des
              marques, commerces et entreprises.
            </p>

            <div className="reasonsList">
              {reasons.map((reason) => (
                <div key={reason} className="reasonItem">
                  <FaCheckCircle />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sponsorCard">
            <span className="sectionBadge lightBadge">Pack sponsor</span>
            <h2>Consultez nos offres sponsor en un clic</h2>
            <p>
              Accédez à notre brochure PDF pour découvrir nos formules sponsor,
              nos options de visibilité et nos solutions de communication.
            </p>

            <a
              href={agency.sponsorPdf}
              target="_blank"
              rel="noreferrer"
              className="btnSponsor bigSponsorBtn"
            >
              <FaFilePdf />
              <span>Voir le pack sponsor PDF</span>
            </a>

            <p className="sponsorNote">
              Des formules personnalisées peuvent être proposées selon votre
              projet et votre budget.
            </p>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="sectionHeading">
            <span className="sectionBadge">Contact</span>
            <h2>Contactez MorPub</h2>
            <p>
              Demandez un devis, échangez avec notre équipe ou consultez notre
              pack sponsor via les canaux ci-dessous.
            </p>
          </div>

          <div className="contactGrid">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
                className="contactCard"
              >
                <div className="contactIcon">{contact.icon}</div>
                <div>
                  <p className="contactLabel">{contact.label}</p>
                  <p className="contactValue">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footerBrand">
            <div className="footerLogoWrap">
              <img
                src={agency.logo}
                alt={agency.name}
                className="footerLogoImage"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div>
              <strong>MorPub</strong>
              <p>Nous créons l’impact.</p>
            </div>
          </div>

          <p className="footerCopy">
            © 2026 MorPub. Communication, création visuelle, sponsorisation et
            solutions digitales pour les marques ambitieuses.
          </p>
        </footer>
      </main>
    </div>
  );
}