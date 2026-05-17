// ============================================
// ALL MCQs – organized into batches of 100
// Total: 700 questions
// ============================================

const ALL_QUESTIONS = [
// ---- Q1 ----
    {
        q: "Ahmed receives an email claiming to be from his bank asking him to verify his password through a link. After entering the details, money disappears from his account. What type of attack occurred?",
        options: { A: "Rootkit", B: "Phishing", C: "Worm", D: "Ethical hacking" },
        answer: "B"
    },
    // ---- Q2 ----
    {
        q: "A company's website becomes unavailable because thousands of infected computers are sending requests to it at the same time. What is this attack called?",
        options: { A: "Trojan horse", B: "Password cracking", C: "Distributed Denial-of-Service", D: "Ethical hacking" },
        answer: "C"
    },
    // ---- Q3 ----
    {
        q: "Sana downloads a free game from the Internet. After installation, her files start disappearing and strange messages appear on the screen. What most likely infected her computer?",
        options: { A: "Virus", B: "Firewall", C: "Patch", D: "Encryption" },
        answer: "A"
    },
    // ---- Q4 ----
    {
        q: "A hacker secretly installs software on a computer that allows complete administrator access without the owner knowing. What is this software called?",
        options: { A: "Worm", B: "Spam", C: "Rootkit", D: "Patch" },
        answer: "C"
    },
    // ---- Q5 ----
    {
        q: "Bilal tries every possible letter and number combination until he successfully accesses an account password. Which method is he using?",
        options: { A: "Dictionary attack", B: "Brute force attack", C: "Ethical hacking", D: "Phishing" },
        answer: "B"
    },
    // ---- Q6 ----
    {
        q: "An employee intentionally shares confidential customer data with a competitor in exchange for money. This is an example of:",
        options: { A: "Competitive intelligence", B: "Cyberterrorism", C: "Industrial espionage", D: "Ethical hacking" },
        answer: "C"
    },
    // ---- Q7 ----
    {
        q: "A harmful program spreads automatically across a network without requiring users to click anything. What type of malware is this?",
        options: { A: "Worm", B: "Trojan horse", C: "Spyware", D: "Spam" },
        answer: "A"
    },
    // ---- Q8 ----
    {
        q: "A student modifies demo software so that it behaves like a fully licensed version. What type of hacking is involved?",
        options: { A: "Net hacking", B: "Email hacking", C: "Software hacking", D: "Ethical hacking" },
        answer: "C"
    },
    // ---- Q9 ----
    {
        q: "A cybercriminal gains unauthorized access to a user's email account and reads private conversations. This is known as:",
        options: { A: "Website hacking", B: "Email hacking", C: "Computer trespassing", D: "Information warfare" },
        answer: "B"
    },
    // ---- Q10 ----
    {
        q: "Ali receives hundreds of unwanted advertising emails every day. These emails are called:",
        options: { A: "Worms", B: "Spam", C: "Rootkits", D: "Exploits" },
        answer: "B"
    },
    // ---- Q11 ----
    {
        q: "A hacker changes the homepage content of a company website without permission. What type of hacking occurred?",
        options: { A: "Website hacking", B: "Password hacking", C: "Hardware hijacking", D: "Ethical hacking" },
        answer: "A"
    },
    // ---- Q12 ----
    {
        q: "A company hires a security expert to identify weaknesses in its network before criminals exploit them. This process is called:",
        options: { A: "Industrial espionage", B: "Ethical hacking", C: "Phishing", D: "Computer trespassing" },
        answer: "B"
    },
    // ---- Q13 ----
    {
        q: "A cybercriminal tricks users into installing a harmful program disguised as a useful application. What is this malware called?",
        options: { A: "Virus", B: "Worm", C: "Trojan horse", D: "Spam" },
        answer: "C"
    },
    // ---- Q14 ----
    {
        q: "During an online exam, a hacker gains access to the university server by using stolen administrator credentials. This is an example of:",
        options: { A: "Computer trespassing", B: "Spam", C: "Competitive intelligence", D: "Ethical hacking" },
        answer: "A"
    },
    // ---- Q15 ----
    {
        q: "A security flaw in software is discovered, but attackers exploit it before developers release a fix. What is this called?",
        options: { A: "Patch attack", B: "Zero-day attack", C: "Dictionary attack", D: "Social engineering" },
        answer: "B"
    },
    // ---- Q16 ----
    {
        q: "A hacker sends fake text messages asking users to verify their banking PINs. This attack is known as:",
        options: { A: "Vishing", B: "Smishing", C: "Spam", D: "Rootkit" },
        answer: "B"
    },
    // ---- Q17 ----
    {
        q: "An attacker calls elderly people pretending to be a bank representative and asks for account information. This is an example of:",
        options: { A: "Vishing", B: "Worm attack", C: "Ethical hacking", D: "Hardware hijacking" },
        answer: "A"
    },
    // ---- Q18 ----
    {
        q: "A hacker gathers information about IP addresses and open ports before attacking a network. This activity is known as:",
        options: { A: "Net hacking", B: "Email hacking", C: "Software hacking", D: "Hardware hijacking" },
        answer: "A"
    },
    // ---- Q19 ----
    {
        q: "A company delays installing a security update released by software developers, and hackers exploit the weakness. The update is known as a:",
        options: { A: "Worm", B: "Patch", C: "Rootkit", D: "Spam" },
        answer: "B"
    },
    // ---- Q20 ----
    {
        q: "A malicious employee plants code that activates and deletes company data on a specific date. What type of malware is this?",
        options: { A: "Virus", B: "Logic bomb", C: "Spam", D: "Worm" },
        answer: "B"
    },
    // ---- Q21 ----
    {
        q: "A group of activists defaces government websites to protest against a policy. This activity is called:",
        options: { A: "Cyberterrorism", B: "Hacktivism", C: "Ethical hacking", D: "Competitive intelligence" },
        answer: "B"
    },
    // ---- Q22 ----
    {
        q: "A cyber attacker targets a country's power grid to create fear and disrupt services. This is an example of:",
        options: { A: "Spam", B: "Industrial espionage", C: "Cyberterrorism", D: "Software piracy" },
        answer: "C"
    },
    // ---- Q23 ----
    {
        q: "A hacker steals thousands of credit card numbers from an online retailer's database. Which crime has occurred?",
        options: { A: "Identity theft", B: "Hardware hijacking", C: "Ethical hacking", D: "Competitive intelligence" },
        answer: "A"
    },
    // ---- Q24 ----
    {
        q: "A user clicks an infected email attachment, causing malware to spread through the office computers. Which malware spread through user action?",
        options: { A: "Worm", B: "Virus", C: "Rootkit", D: "Patch" },
        answer: "B"
    },
    // ---- Q25 ----
    {
        q: "A criminal secretly uses compromised computers to launch attacks on other systems. These infected computers are called:",
        options: { A: "Firewalls", B: "Bots", C: "Patches", D: "Exploits" },
        answer: "B"
    },
    // ---- Q26 ----
    {
        q: "A hacker exploits a vulnerability in a printer's automatic update feature to enter a company network. What is this an example of?",
        options: { A: "Hardware hijacking", B: "Ethical hacking", C: "Password cracking", D: "Spam attack" },
        answer: "A"
    },
    // ---- Q27 ----
    {
        q: "During an investigation, it is discovered that an employee and an outsider worked together to steal company data. This cooperation is called:",
        options: { A: "Phishing", B: "Collusion", C: "Smishing", D: "Cyberterrorism" },
        answer: "B"
    },
    // ---- Q28 ----
    {
        q: "A hacker uses a prepared list of common passwords to break into user accounts. Which technique is this?",
        options: { A: "Brute force attack", B: "Dictionary attack", C: "Rootkit attack", D: "Ethical hacking" },
        answer: "B"
    },
    // ---- Q29 ----
    {
        q: "A cybercriminal spreads malware that modifies operating system settings and steals passwords worldwide. Which famous malware demonstrated this behavior?",
        options: { A: "Love Bug", B: "UNIX Patch", C: "Logic Bomb", D: "Spyware Defender" },
        answer: "A"
    },
    // ---- Q30 ----
    {
        q: "A graduate student releases a program that spreads across UNIX systems and disrupts Internet services. Which historical incident does this describe?",
        options: { A: "Love Bug Virus", B: "Internet Worm", C: "DDoS attack", D: "Phishing scam" },
        answer: "B"
    },
    // ---- Q31 ----
    {
        q: "A hacker steals customer information from a company database to open bank accounts using the victims' identities. What crime is this?",
        options: { A: "Cyberterrorism", B: "Identity theft", C: "Spam marketing", D: "Ethical hacking" },
        answer: "B"
    },
    // ---- Q32 ----
    {
        q: "A company legally gathers information about competitors from public websites and reports. What is this practice called?",
        options: { A: "Industrial espionage", B: "Competitive intelligence", C: "Computer trespassing", D: "Hacktivism" },
        answer: "B"
    },
    // ---- Q33 ----
    {
        q: "A criminal gains access to a victim's computer and secretly monitors browsing history and saved passwords. This is an example of:",
        options: { A: "Computer trespassing", B: "Competitive intelligence", C: "Ethical hacking", D: "Spam distribution" },
        answer: "A"
    },
    // ---- Q34 ----
    {
        q: "A hacker creates malware that opens a hidden access point into infected computers for future attacks. What is this hidden access point commonly called?",
        options: { A: "Patch", B: "Back door", C: "Firewall", D: "Encryption key" },
        answer: "B"
    },
    // ---- Q35 ----
    {
        q: "A company's security team tests its systems by attempting to hack into them with permission. The team members are known as:",
        options: { A: "Crackers", B: "Cyberterrorists", C: "White hat hackers", D: "Script kiddies" },
        answer: "C"
    },
    // ---- Q36 ----
    {
        q: "A beginner hacker uses ready-made hacking tools created by others without understanding how they work. This person is often called a:",
        options: { A: "Industrial spy", B: "Script kiddie", C: "Ethical hacker", D: "Cyberterrorist" },
        answer: "B"
    },
    // ---- Q37 ----
    {
        q: "An online attacker exploits a weakness caused by poor software design to gain access to data. This type of attack is called an:",
        options: { A: "Exploit", B: "Patch", C: "Spam", D: "Encryption" },
        answer: "A"
    },
    // ---- Q38 ----
    {
        q: "A criminal floods a victim's inbox with fake lottery messages and advertisements. Which cybercrime is being committed?",
        options: { A: "Rootkit attack", B: "Spam distribution", C: "Ethical hacking", D: "Net hacking" },
        answer: "B"
    },
    // ---- Q39 ----
    {
        q: "A hacker secretly changes software code so the application behaves differently than intended. This is an example of:",
        options: { A: "Software hacking", B: "Website hacking", C: "Hardware hijacking", D: "Smishing" },
        answer: "A"
    },
    // ---- Q40 ----
    {
        q: "A company experiences financial losses because attackers stole confidential trade secrets using illegal means. This activity is called:",
        options: { A: "Competitive intelligence", B: "Industrial espionage", C: "Ethical hacking", D: "Computer maintenance" },
        answer: "B"
    },
    // ---- Q41 ----
    {
        q: "A hacker infects many computers and controls them remotely as one large network to attack websites. This network is called a:",
        options: { A: "Firewall", B: "Patch system", C: "Botnet", D: "Proxy server" },
        answer: "C"
    },
    // ---- Q42 ----
    {
        q: "A cybercriminal accesses a user's computer without authorization to edit and delete files. What type of hacking is this?",
        options: { A: "Computer hacking", B: "Website hacking", C: "Email hacking", D: "Net hacking" },
        answer: "A"
    },
    // ---- Q43 ----
    {
        q: "A company employee forgets to verify user identities before granting system access, leading to a security breach. What factor contributed most to the incident?",
        options: { A: "Ethical hacking", B: "Human error", C: "Encryption", D: "Competitive intelligence" },
        answer: "B"
    },
    // ---- Q44 ----
    {
        q: "A hacker sends fake emails specifically targeting employees of a certain organization. This attack is known as:",
        options: { A: "Smishing", B: "Vishing", C: "Spear-phishing", D: "Spam" },
        answer: "C"
    },
    // ---- Q45 ----
    {
        q: "A cybercriminal accesses medical records stored online without permission. Which issue is most threatened?",
        options: { A: "Entertainment", B: "Privacy", C: "Competition", D: "Networking" },
        answer: "B"
    },
    // ---- Q46 ----
    {
        q: "A hacker modifies browser settings, destroys media files, and spreads rapidly through email systems worldwide. Which malware fits this description?",
        options: { A: "Love Bug virus", B: "Rootkit", C: "Logic bomb", D: "Dictionary attack" },
        answer: "A"
    },
    // ---- Q47 ----
    {
        q: "A criminal uses social media to track a victim's location and daily activities without consent. What cybercrime does this describe?",
        options: { A: "Stalking", B: "Ethical hacking", C: "Competitive intelligence", D: "Patch management" },
        answer: "A"
    },
    // ---- Q48 ----
    {
        q: "A company's online payment system uses encryption and CVV verification to reduce fraud risks. Which threat are they mainly trying to prevent?",
        options: { A: "Cyberterrorism", B: "Online credit card fraud", C: "Rootkits", D: "DDoS attacks" },
        answer: "B"
    },
    // ---- Q49 ----
    {
        q: "A hacker gains unauthorized access to a network simply to test his skills and curiosity without financial motives. Traditionally, this person is called a:",
        options: { A: "White hat hacker", B: "Hacker", C: "Cyberterrorist", D: "Industrial spy" },
        answer: "B"
    },
    // ---- Q50 ----
    {
        q: "A malicious insider intentionally installs harmful software into the company network because he is angry after being fired. Which category best describes this perpetrator?",
        options: { A: "Ethical hacker", B: "Hacktivist", C: "Malicious insider", D: "Competitive analyst" },
        answer: "C"
    },
    // ---- Q51 ----
    {
        q: "A software developer discovers that another company copied his original application code without permission. Which intellectual property law protects his software?",
        options: { A: "Patent Law", B: "Trademark Law", C: "Copyright Law", D: "Trade Secret Law" },
        answer: "C"
    },
    // ---- Q52 ----
    {
        q: "A company creates a unique logo for its products and legally registers it. Which type of intellectual property protects this logo?",
        options: { A: "Patent", B: "Trademark", C: "Copyright", D: "Trade Secret" },
        answer: "B"
    },
    // ---- Q53 ----
    {
        q: "An inventor develops a new machine that improves industrial production and applies for legal protection. What type of protection is most suitable?",
        options: { A: "Copyright", B: "Trademark", C: "Patent", D: "Trade secret" },
        answer: "C"
    },
    // ---- Q54 ----
    {
        q: "A business keeps its secret recipe confidential because it gives them a competitive advantage. What type of protection applies?",
        options: { A: "Patent Law", B: "Copyright Law", C: "Trade Secret Law", D: "Trademark Law" },
        answer: "C"
    },
    {
        q: "A student copies paragraphs from an online article into an assignment without giving credit to the author. What unethical act has occurred?",
        options: { A: "Cybersquatting", B: "Plagiarism", C: "Reverse engineering", D: "Trademarking" },
        answer: "B"
    },
    {
        q: "A company legally collects public information about its competitors to improve strategy. What is this practice called?",
        options: { A: "Industrial espionage", B: "Competitive intelligence", C: "Cyberterrorism", D: "Trademark infringement" },
        answer: "B"
    },
    {
        q: "A hacker illegally steals confidential business information from a rival company. This activity is known as:",
        options: { A: "Competitive intelligence", B: "Reverse engineering", C: "Industrial espionage", D: "Copyrighting" },
        answer: "C"
    },
    {
        q: "A programmer studies machine code to understand how software works and improve it. What process is being used?",
        options: { A: "Trademark infringement", B: "Reverse engineering", C: "Cybersquatting", D: "Patent trolling" },
        answer: "B"
    },
    {
        q: "A person registers a famous company's domain name hoping to sell it back for a large amount of money. What is this practice called?",
        options: { A: "Phishing", B: "Cybersquatting", C: "Copyrighting", D: "Patent licensing" },
        answer: "B"
    },
    {
        q: "A company sues another business for using a confusingly similar logo on its products. Which issue is involved?",
        options: { A: "Patent violation", B: "Trademark infringement", C: "Plagiarism", D: "Trade secret theft" },
        answer: "B"
    },
    {
        q: "A developer releases source code publicly so other programmers can improve and modify it. What type of software is this?",
        options: { A: "Proprietary software", B: "Open source software", C: "Copyrighted software", D: "Patented software" },
        answer: "B"
    },
    {
        q: "An inventor grants another company permission to use his patented invention for an agreed fee. What is this permission called?",
        options: { A: "Trademark", B: "Licensing", C: "Plagiarism", D: "Reverse engineering" },
        answer: "B"
    },
    {
        q: "A business owner files an application with IPO-Pakistan to secure exclusive rights over a new invention. What is he applying for?",
        options: { A: "Copyright", B: "Patent", C: "Trademark", D: "Trade secret" },
        answer: "B"
    },
    {
        q: "A movie producer has exclusive rights to distribute and reproduce a film. Which law provides these rights?",
        options: { A: "Trade Secret Law", B: "Copyright Law", C: "Patent Law", D: "Trademark Law" },
        answer: "B"
    },
    {
        q: "A company creates a slogan that distinguishes its products from competitors. Which intellectual property category applies?",
        options: { A: "Trademark", B: "Patent", C: "Copyright", D: "Trade secret" },
        answer: "A"
    },
    {
        q: "An engineer invents a new process that is useful, industrially applicable, and unique. Which requirement for patentability does this satisfy?",
        options: { A: "Novelty", B: "Fair use", C: "Public disclosure", D: "Plagiarism" },
        answer: "A"
    },
    {
        q: "A software manufacturer observes a competitor's program and creates a similar one without copying the code. Which issue is highlighted?",
        options: { A: "Copyright interpretation", B: "Trade secret theft", C: "Trademark misuse", D: "Cybersquatting" },
        answer: "A"
    },
    {
        q: "A student submits another person's research paper under his own name. Which ethical violation is this?",
        options: { A: "Reverse engineering", B: "Trademark infringement", C: "Plagiarism", D: "Patent trolling" },
        answer: "C"
    },
    {
        q: "A company publicly shares software source code so bugs can be identified quickly by developers worldwide. What benefit of open source is shown?",
        options: { A: "Increased secrecy", B: "High reliability", C: "Trademark protection", D: "Patent extension" },
        answer: "B"
    },
    {
        q: "A business uses illegal methods to access confidential formulas from a competing company. Which crime is involved?",
        options: { A: "Industrial espionage", B: "Competitive intelligence", C: "Patent licensing", D: "Open sourcing" },
        answer: "A"
    },
    {
        q: "A company sues another organization for using its protected invention without permission during the patent period. Which law supports the lawsuit?",
        options: { A: "Trademark Law", B: "Patent Law", C: "Copyright Law", D: "Trade Secret Law" },
        answer: "B"
    },
    {
        q: "A technology firm protects its customer database and internal methods from public disclosure. Which intellectual property method is being used?",
        options: { A: "Copyright", B: "Trademark", C: "Trade secret", D: "Patent" },
        answer: "C"
    },
    {
        q: "A programmer translates machine language into readable source code for analysis. Which tool is mainly used?",
        options: { A: "Compiler", B: "Firewall", C: "Decompiler", D: "Browser" },
        answer: "C"
    },
    {
        q: "A business owner notices another company using a very similar product name to confuse customers. What issue is this?",
        options: { A: "Plagiarism", B: "Trademark infringement", C: "Patent expiration", D: "Reverse engineering" },
        answer: "B"
    },
    {
        q: "A patent owner enjoys exclusive rights to make and sell an invention for a limited period. How long is this protection generally valid?",
        options: { A: "5 years", B: "10 years", C: "20 years", D: "Lifetime" },
        answer: "C"
    },
    {
        q: "A company develops a positive workplace culture where employees recover quickly from setbacks. Which concept does this describe?",
        options: { A: "Organizational resilience", B: "Industrial espionage", C: "Functional conflict", D: "Trademark loyalty" },
        answer: "A"
    },
    {
        q: "An employee with a positive attitude contributes creative ideas and improves productivity. Which organizational behavior effect is shown?",
        options: { A: "Poor performance", B: "Increased stress", C: "Positive behavior effect", D: "Cyberloafing" },
        answer: "C"
    },
    {
        q: "A worker constantly displays negative behavior and ignores quality standards. What impact is most likely?",
        options: { A: "Increased productivity", B: "Better teamwork", C: "Reduced performance", D: "Higher innovation" },
        answer: "C"
    },
    {
        q: "A manager builds trust and cooperation among employees, resulting in better customer service and loyalty. Which organizational concept is demonstrated?",
        options: { A: "Fostering loyalty", B: "Industrial espionage", C: "Patent management", D: "Reverse engineering" },
        answer: "A"
    },
    {
        q: "A company groups employees according to departments such as finance, HR, and marketing. Which organizational structure is this?",
        options: { A: "Team structure", B: "Functional structure", C: "Divisional structure", D: "Matrix structure" },
        answer: "B"
    },
    {
        q: "In an organization, decision-making authority is pushed to top management and employees mostly follow instructions. Which structure fits this situation?",
        options: { A: "Functional structure", B: "Team structure", C: "Divisional structure", D: "Informal structure" },
        answer: "A"
    },
    {
        q: "A creative design company allows employees to work freely in groups with decentralized authority. Which structure is most suitable?",
        options: { A: "Functional structure", B: "Divisional structure", C: "Team structure", D: "Bureaucratic structure" },
        answer: "C"
    },
    {
        q: "A multinational company separates employees based on product lines and regional operations. Which structure is being used?",
        options: { A: "Functional structure", B: "Team structure", C: "Divisional structure", D: "Centralized structure" },
        answer: "C"
    },
    {
        q: "An organization notices that one employee's negative attitude is spreading across the workforce. What should management do first?",
        options: { A: "Ignore the issue", B: "Identify and resolve the core problem", C: "Reduce salaries", D: "Change trademarks" },
        answer: "B"
    },
    {
        q: "Employees in a company feel secure and satisfied because management treats them fairly and respectfully. What outcome is most likely?",
        options: { A: "Increased loyalty", B: "Reduced productivity", C: "Higher conflict", D: "Patent infringement" },
        answer: "A"
    },
    {
        q: "A worker remains calm under pressure and quickly adapts after project failure. Which positive organizational behavior is shown?",
        options: { A: "Negativity", B: "Resilience", C: "Plagiarism", D: "Cybersquatting" },
        answer: "B"
    },
    {
        q: "A manager encourages teamwork and employee participation in decision-making. What is the likely result?",
        options: { A: "Reduced satisfaction", B: "Greater employee commitment", C: "Increased conflict", D: "Lower creativity" },
        answer: "B"
    },
    {
        q: "Employees in a decentralized workplace are encouraged to share ideas freely. Which organizational structure supports this environment?",
        options: { A: "Team structure", B: "Functional structure", C: "Hierarchical structure", D: "Bureaucratic structure" },
        answer: "A"
    },
    {
        q: "A company's productivity decreases because workers are unhappy with the work environment. What is the major cause?",
        options: { A: "Positive behavior", B: "Negative emotions", C: "Open source software", D: "Trademark protection" },
        answer: "B"
    },
    {
        q: "A business organizes employees into units dedicated to specific customer categories. Which structure is this?",
        options: { A: "Functional structure", B: "Divisional structure", C: "Team structure", D: "Circular structure" },
        answer: "B"
    },
    {
        q: "A software company improves employee satisfaction by reducing strict job specialization and increasing collaboration. Which structure likely supports this?",
        options: { A: "Functional structure", B: "Team structure", C: "Divisional structure", D: "Centralized structure" },
        answer: "B"
    },
    {
        q: "A manager notices that employees with positive emotions produce better results at work. Which organizational behavior principle is illustrated?",
        options: { A: "Positive emotions improve performance", B: "Trade secrets improve teamwork", C: "Patents increase morale", D: "Reverse engineering reduces stress" },
        answer: "A"
    },
    {
        q: "A business wants to ensure employees clearly understand reporting relationships and authority. What should it establish?",
        options: { A: "Trade secrets", B: "Organizational structure", C: "Patent system", D: "Cybersquatting policy" },
        answer: "B"
    },
    {
        q: "A company's leaders encourage cooperation and trust among workers to strengthen customer relationships. What organizational benefit is expected?",
        options: { A: "Reduced profits", B: "Increased customer loyalty", C: "Higher plagiarism", D: "More industrial espionage" },
        answer: "B"
    },
    {
        q: "An employee in a functional structure rarely takes initiative because decisions are made only by upper management. What is a disadvantage of this structure?",
        options: { A: "Too much creativity", B: "Produces followers", C: "Lack of teamwork", D: "Weak customer focus" },
        answer: "B"
    },
    {
        q: "A team-based organization gives employees more authority and flexibility in completing tasks. What is a likely effect?",
        options: { A: "Reduced job satisfaction", B: "Increased employee satisfaction", C: "Higher plagiarism", D: "Trademark conflicts" },
        answer: "B"
    },
    {
        q: "A divisional manager behaves like a leader because each division operates as a small business unit. Which structure encourages this behavior?",
        options: { A: "Team structure", B: "Functional structure", C: "Divisional structure", D: "Centralized structure" },
        answer: "C"
    },
    {
        q: "An organization introduces supportive policies to help employees recover quickly from setbacks and failures. Which concept is being promoted?",
        options: { A: "Patent protection", B: "Organizational resilience", C: "Reverse engineering", D: "Trademark licensing" },
        answer: "B"
    },
    {
        q: "A company experiences poor employee performance because workers feel stressed and undervalued. Which factor is most responsible?",
        options: { A: "Positive workplace culture", B: "Negative workplace behavior", C: "Trade secret policy", D: "Patent registration" },
        answer: "B"
    },
    {
        q: "A business creates a collaborative workplace where employees contribute innovative ideas to improve organizational success. Which organizational behavior outcome is demonstrated?",
        options: { A: "Reduced productivity", B: "Positive behavior effects", C: "Trademark infringement", D: "Industrial espionage" },
        answer: "B"
    },
    {
        q: "What does Intellectual Property (IP) refer to?",
        options: { A: "Physical assets owned by a company", B: "Creations of the mind such as inventions and artistic works", C: "Government-owned information", D: "Financial resources of an organization" },
        answer: "B"
    },
    {
        q: "Which of the following is NOT a type of intellectual property protection?",
        options: { A: "Copyrights", B: "Patents", C: "Trademarks", D: "Taxation" },
        answer: "D"
    },
    {
        q: "Copyright law primarily protects:",
        options: { A: "Inventions", B: "Business profits", C: "Authored works", D: "Trade licenses" },
        answer: "C"
    },
    {
        q: "Copyright protection begins when:",
        options: { A: "The work is registered internationally", B: "The work is sold commercially", C: "The work is fixed in a tangible form", D: "A lawyer approves the work" },
        answer: "C"
    },
    {
        q: "Which of the following is covered under copyright?",
        options: { A: "Company buildings", B: "Novels and computer software", C: "Land ownership", D: "Tax returns" },
        answer: "B"
    },
    {
        q: "Copyright grants creators the exclusive right to:",
        options: { A: "Collect taxes", B: "Reproduce and distribute work", C: "Own all public information", D: "Control internet access" },
        answer: "B"
    },
    {
        q: "Which of the following is an artistic work under copyright law?",
        options: { A: "Machine parts", B: "Photographs", C: "Office furniture", D: "Salary records" },
        answer: "B"
    },
    {
        q: "Cinematographic works include:",
        options: { A: "Maps only", B: "Sound recordings only", C: "Movies and documentaries", D: "Business reports" },
        answer: "C"
    },
    {
        q: "Record works include:",
        options: { A: "Musical works and sound recordings", B: "Real estate records", C: "Financial statements", D: "Machine blueprints" },
        answer: "A"
    },
    {
        q: "Copyright aims to:",
        options: { A: "Increase taxes", B: "Advance the progress of knowledge", C: "Restrict creativity", D: "Eliminate competition" },
        answer: "B"
    },
    {
        q: "Software copyright protection raises many issues of:",
        options: { A: "Transportation", B: "Interpretation", C: "Construction", D: "Advertising" },
        answer: "B"
    },
    {
        q: "Two developers can independently create similar software without:",
        options: { A: "Marketing", B: "Patent approval", C: "Copyright infringement", D: "Teamwork" },
        answer: "C"
    },
    {
        q: "Patent law protects:",
        options: { A: "Artistic logos", B: "Literary works", C: "Inventions", D: "Customer records" },
        answer: "C"
    },
    {
        q: "A patent grants exclusive rights for a limited period of:",
        options: { A: "5 years", B: "10 years", C: "20 years", D: "Lifetime" },
        answer: "C"
    },
    {
        q: "A patent owner can:",
        options: { A: "Prevent others from using the invention", B: "Control government policy", C: "Ban all competitors", D: "Remove copyrights" },
        answer: "A"
    },
    {
        q: "Which of the following is a requirement for patentability?",
        options: { A: "Industrial application", B: "Personal preference", C: "Employee approval", D: "High price" },
        answer: "A"
    },
    {
        q: "A patentable invention must be:",
        options: { A: "Old and traditional", B: "Novel or new", C: "Confidential forever", D: "Artistic only" },
        answer: "B"
    },
    {
        q: "Which organization handles patents in Pakistan?",
        options: { A: "HEC", B: "IPO-Pakistan", C: "FIA", D: "PEC" },
        answer: "B"
    },
    {
        q: "A patent troll mainly:",
        options: { A: "Creates inventions", B: "Sells machinery", C: "Sues others for patent infringement", D: "Publishes books" },
        answer: "C"
    },
    {
        q: "Trademark law protects:",
        options: { A: "Inventions only", B: "Unique symbols or words representing a business", C: "Scientific formulas", D: "Employee records" },
        answer: "B"
    },
    {
        q: "A trademark can include:",
        options: { A: "Word or symbol", B: "Building design only", C: "Employee ID card", D: "Tax form" },
        answer: "A"
    },
    {
        q: "Trade secrets help safeguard:",
        options: { A: "Public information", B: "Information critical to organizational success", C: "Government policies", D: "Social media accounts" },
        answer: "B"
    },
    {
        q: "A trade secret may include a:",
        options: { A: "Formula or method", B: "Public advertisement", C: "Newspaper article", D: "Parking ticket" },
        answer: "A"
    },
    {
        q: "Plagiarism means:",
        options: { A: "Publishing original work", B: "Sharing ideas legally", C: "Stealing another person's ideas or words", D: "Conducting legal research" },
        answer: "C"
    },
    {
        q: "Many students believe electronic content is:",
        options: { A: "Illegal", B: "In the public domain", C: "Patent protected only", D: "Unavailable online" },
        answer: "B"
    },
    {
        q: "Plagiarism detection systems compare submitted work against:",
        options: { A: "Weather reports", B: "Databases of electronic content", C: "Maps only", D: "Financial records" },
        answer: "B"
    },
    {
        q: "Reverse engineering involves:",
        options: { A: "Ignoring technology", B: "Taking something apart to understand it", C: "Selling products illegally", D: "Advertising software" },
        answer: "B"
    },
    {
        q: "Reverse engineering can be applied to:",
        options: { A: "Hardware and software", B: "Furniture only", C: "Clothing design", D: "Banking systems only" },
        answer: "A"
    },
    {
        q: "A compiler converts:",
        options: { A: "Machine language into graphics", B: "Source language into machine language", C: "Software into hardware", D: "Images into text" },
        answer: "B"
    },
    {
        q: "A decompiler:",
        options: { A: "Produces source code from machine language", B: "Deletes software permanently", C: "Encrypts data", D: "Creates patents" },
        answer: "A"
    },
    {
        q: "Open source code is:",
        options: { A: "Hidden from users", B: "Available for use and modification", C: "Illegal software", D: "Only for government use" },
        answer: "B"
    },
    {
        q: "One benefit of open source software is:",
        options: { A: "Slow bug fixing", B: "Limited adaptability", C: "Rapid identification of bugs", D: "Restricted access" },
        answer: "C"
    },
    {
        q: "Competitive intelligence uses:",
        options: { A: "Illegal methods", B: "Legal means and public information", C: "Hacking techniques", D: "Industrial espionage only" },
        answer: "B"
    },
    {
        q: "Industrial espionage differs from competitive intelligence because it:",
        options: { A: "Uses legal means", B: "Uses illegal means", C: "Focuses on marketing", D: "Avoids business information" },
        answer: "B"
    },
    {
        q: "Trademark infringement may occur when:",
        options: { A: "A trademark is copied or used confusingly", B: "A patent expires", C: "A company changes staff", D: "An employee resigns" },
        answer: "A"
    },
    {
        q: "Cybersquatting involves:",
        options: { A: "Selling computers online", B: "Registering domain names in bad faith", C: "Building websites for schools", D: "Protecting trademarks legally" },
        answer: "B"
    },
    {
        q: "Cybersquatters hope that trademark owners will:",
        options: { A: "Ignore the domain", B: "Buy the domain name for a large amount", C: "Change company names", D: "Close their business" },
        answer: "B"
    },
    {
        q: "Organizational Behavior (OB) refers to:",
        options: { A: "Government administration", B: "Workplace interactions among individuals", C: "International trade policies", D: "Computer networking" },
        answer: "B"
    },
    {
        q: "Organizational Behavior helps companies create:",
        options: { A: "Better management practices", B: "Tax systems", C: "International borders", D: "New currencies" },
        answer: "A"
    },
    {
        q: "Positive emotions in the workplace are related to:",
        options: { A: "Poor performance", B: "Employee performance", C: "Financial losses", D: "Conflict only" },
        answer: "B"
    },
    {
        q: "Positive organizational behavior permits employees to:",
        options: { A: "Ignore problems", B: "Recover quickly from setbacks", C: "Avoid responsibilities", D: "Reduce productivity" },
        answer: "B"
    },
    {
        q: "Positive organizational behavior leads to:",
        options: { A: "Lower job satisfaction", B: "Better job satisfaction and commitment", C: "Increased absenteeism", D: "Workplace conflict" },
        answer: "B"
    },
    {
        q: "Productivity is often related to:",
        options: { A: "Office location only", B: "Emotions and attitude", C: "Company logo", D: "Furniture color" },
        answer: "B"
    },
    {
        q: "Negative behavior in the workplace usually:",
        options: { A: "Improves teamwork", B: "Increases productivity", C: "Has a bad effect on performance", D: "Builds motivation" },
        answer: "C"
    },
    {
        q: "Employees with poor behavior often show:",
        options: { A: "High concern for quality", B: "Little concern for quality", C: "Increased creativity", D: "Better cooperation" },
        answer: "B"
    },
    {
        q: "Positive behavior helps employees feel:",
        options: { A: "More stress", B: "Less stress", C: "More confusion", D: "Less confidence" },
        answer: "B"
    },
    {
        q: "Confident employees often contribute:",
        options: { A: "Fewer ideas", B: "New ideas to help the organization", C: "Less productivity", D: "More conflicts" },
        answer: "B"
    },
    {
        q: "Managers with trust and cooperativeness are usually:",
        options: { A: "Less successful", B: "More successful", C: "Ineffective leaders", D: "Unproductive workers" },
        answer: "B"
    },
    {
        q: "Businesses that treat employees well are likely to:",
        options: { A: "Lose customers", B: "Treat customers well too", C: "Reduce profits", D: "Avoid teamwork" },
        answer: "B"
    },
    {
        q: "Increased customer loyalty often results in:",
        options: { A: "Lower profits", B: "Higher profits and job security", C: "More employee turnover", D: "Reduced motivation" },
        answer: "B"
    },
    {
        q: "Identifying core issues helps organizations:",
        options: { A: "Reduce success chances", B: "Increase chances of success", C: "Avoid communication", D: "Ignore employees" },
        answer: "B"
    },
    {
        q: "Poor employee behavior can spread to:",
        options: { A: "Customers only", B: "The rest of the workforce", C: "Suppliers only", D: "Government agencies" },
        answer: "B"
    },
    {
        q: "Organizational structure establishes:",
        options: { A: "International trade laws", B: "Relationships among managers and workers", C: "Political systems", D: "Transportation networks" },
        answer: "B"
    },
    {
        q: "Functional structure is characterized by:",
        options: { A: "Decentralized authority", B: "Top-down power hierarchy", C: "Complete employee freedom", D: "No supervision" },
        answer: "B"
    },
    {
        q: "In a functional structure, decision-making authority is:",
        options: { A: "Pushed upward", B: "Shared equally", C: "Eliminated", D: "Given only to customers" },
        answer: "A"
    },
    {
        q: "Functional structure often inhibits:",
        options: { A: "Productivity", B: "Initiative", C: "Communication", D: "Profitability" },
        answer: "B"
    },
    {
        q: "Team structure produces:",
        options: { A: "A rigid workplace", B: "A freer workplace", C: "More centralization", D: "Less creativity" },
        answer: "B"
    },
    {
        q: "In a team structure, authority is:",
        options: { A: "Centralized at the top", B: "Decentralized to employees", C: "Eliminated completely", D: "Controlled by customers" },
        answer: "B"
    },
    {
        q: "Team structures are useful in:",
        options: { A: "Creative industries", B: "Farming only", C: "Military operations only", D: "Banking laws" },
        answer: "A"
    },
    {
        q: "Divisional structure is suitable when a company has:",
        options: { A: "One product only", B: "Different product lines or locations", C: "No managers", D: "No employees" },
        answer: "B"
    },
    {
        q: "In a divisional structure, each division operates as:",
        options: { A: "A school", B: "A small business unit", C: "A legal court", D: "A political party" },
        answer: "B"
    },
    {
        q: "Copyright is considered a type of:",
        options: { A: "Real estate", B: "Intellectual property", C: "Insurance", D: "Taxation" },
        answer: "B"
    },
    {
        q: "Which of the following is protected by trademark law?",
        options: { A: "Business symbol", B: "Mathematical formula", C: "Employee attendance", D: "Patent application" },
        answer: "A"
    },
    {
        q: "Which intellectual property protection applies to inventions?",
        options: { A: "Patent", B: "Trademark", C: "Copyright", D: "Trade secret only" },
        answer: "A"
    },
    {
        q: "Which of the following is a literary work?",
        options: { A: "Sculpture", B: "Novel", C: "Machine tool", D: "Trademark logo" },
        answer: "B"
    },
    {
        q: "Architectural works are categorized as:",
        options: { A: "Artistic works", B: "Trade secrets", C: "Patents", D: "Financial records" },
        answer: "A"
    },
    {
        q: "Copyright gives creators economic incentive to:",
        options: { A: "Stop creating", B: "Create new works", C: "Avoid publishing", D: "Reduce knowledge" },
        answer: "B"
    },
    {
        q: "A patent can be granted for:",
        options: { A: "A process or product", B: "A company name only", C: "Employee training only", D: "Public speeches only" },
        answer: "A"
    },
    {
        q: "After patent expiration, the invention enters:",
        options: { A: "Private ownership forever", B: "Public domain", C: "Confidential archives", D: "Restricted access" },
        answer: "B"
    },
    {
        q: "A patent owner may give permission to others through a:",
        options: { A: "Fine", B: "License", C: "Protest", D: "Tax return" },
        answer: "B"
    },
    {
        q: "Which of the following is NOT a characteristic of a patentable invention?",
        options: { A: "Novelty", B: "Inventive step", C: "Industrial application", D: "Personal popularity" },
        answer: "D"
    },
    {
        q: "Competitive intelligence is often integrated into:",
        options: { A: "Strategic planning", B: "Medical operations", C: "Construction work", D: "Sports training" },
        answer: "A"
    },
    {
        q: "Without safeguards, competitive intelligence may cross into:",
        options: { A: "Team building", B: "Industrial espionage", C: "Copyright law", D: "Customer service" },
        answer: "B"
    },
    {
        q: "Trademark infringement cases often involve:",
        options: { A: "Web sites and domain names", B: "Building construction", C: "Salary structures", D: "Sports events" },
        answer: "A"
    },
    {
        q: "Nominative fair use is often used as a:",
        options: { A: "Punishment", B: "Defense in trademark infringement cases", C: "Tax policy", D: "Hiring procedure" },
        answer: "B"
    },
    {
        q: "A trade secret provides:",
        options: { A: "Competitive edge", B: "Public entertainment", C: "Tax exemptions", D: "Government funding" },
        answer: "A"
    },
    {
        q: "Which of the following best describes open source code?",
        options: { A: "Secret and inaccessible", B: "Freely modifiable by users", C: "Illegal to distribute", D: "Owned by one programmer only" },
        answer: "B"
    },
    {
        q: "One reason open source software is reliable is because:",
        options: { A: "Only one developer works on it", B: "Bugs are rapidly identified and fixed", C: "It cannot be modified", D: "It avoids testing" },
        answer: "B"
    },
    {
        q: "A worker with a positive attitude is likely to:",
        options: { A: "Experience less stress", B: "Avoid teamwork", C: "Produce poor work", D: "Ignore innovation" },
        answer: "A"
    },
    {
        q: "Organizational behavior studies:",
        options: { A: "Natural disasters", B: "Human interaction in workplaces", C: "Astronomy", D: "International warfare" },
        answer: "B"
    },
    {
        q: "Employees who are unhappy often:",
        options: { A: "Maintain high standards", B: "Show reduced productivity", C: "Improve teamwork", D: "Increase innovation" },
        answer: "B"
    },
    {
        q: "Positive organizational behavior supports:",
        options: { A: "Work happiness", B: "Conflict only", C: "Employee isolation", D: "Reduced commitment" },
        answer: "A"
    },
    {
        q: "Functional structures generally produce:",
        options: { A: "Followers", B: "Independent contractors only", C: "No hierarchy", D: "Total freedom" },
        answer: "A"
    },
    {
        q: "In team structures, satisfaction increases as:",
        options: { A: "Stress rises", B: "Job specialization decreases", C: "Authority is removed", D: "Conflict increases" },
        answer: "B"
    },
    {
        q: "Divisional managers tend to behave like:",
        options: { A: "Followers only", B: "Leaders", C: "Customers", D: "Auditors" },
        answer: "B"
    },
    {
        q: "Which law protects authored works?",
        options: { A: "Patent law", B: "Copyright law", C: "Trade law", D: "Contract law" },
        answer: "B"
    },
    {
        q: "Which of the following is an example of cybersquatting?",
        options: { A: "Buying office furniture", B: "Registering a famous company's domain name in bad faith", C: "Creating open source software", D: "Publishing research articles" },
        answer: "B"
    },
    {
        q: "Which intellectual property type protects logos?",
        options: { A: "Trademark", B: "Patent", C: "Trade secret", D: "License" },
        answer: "A"
    },
    {
        q: "Which of the following is an example of reverse engineering?",
        options: { A: "Taking software apart to understand it", B: "Hiring employees", C: "Conducting interviews", D: "Filing taxes" },
        answer: "A"
    },
    {
        q: "A compiler is a:",
        options: { A: "Database server", B: "Language translator", C: "Marketing tool", D: "Financial application" },
        answer: "B"
    },
    {
        q: "Open source software can be adapted to:",
        options: { A: "Prevent improvements", B: "Meet new needs", C: "Eliminate users", D: "Avoid updates" },
        answer: "B"
    },
    {
        q: "Plagiarism is common:",
        options: { A: "Only in schools", B: "Only in businesses", C: "Both inside and outside academia", D: "Only online" },
        answer: "C"
    },
    {
        q: "Which of the following best describes trade secrets?",
        options: { A: "Publicly shared methods", B: "Confidential business information", C: "Government regulations", D: "Published books" },
        answer: "B"
    },
    {
        q: "Which structure decentralizes authority to employees?",
        options: { A: "Functional structure", B: "Team structure", C: "Hierarchical government", D: "Patent office" },
        answer: "B"
    },
    {
        q: "Poor workplace behavior can negatively affect:",
        options: { A: "Only one employee", B: "The entire workforce", C: "Only customers", D: "Only managers" },
        answer: "B"
    },
    {
        q: "The main purpose of a trademark is to:",
        options: { A: "Identify and distinguish goods", B: "Protect inventions", C: "Publish books", D: "Replace patents" },
        answer: "A"
    },
    {
        q: "Patents prevent:",
        options: { A: "Independent creation and copying", B: "Teamwork", C: "Product sales", D: "Research activities" },
        answer: "A"
    },
    {
        q: "Organizational structure helps employees understand:",
        options: { A: "Authority and responsibilities", B: "Foreign policy", C: "Banking laws", D: "Taxation only" },
        answer: "A"
    },
    {
        q: "Positive workplace behavior contributes to:",
        options: { A: "Organizational success", B: "Increased conflict", C: "Reduced creativity", D: "Lower morale" },
        answer: "A"
    },
    {
        q: "Intellectual property protection is important because it:",
        options: { A: "Encourages innovation and creativity", B: "Eliminates competition entirely", C: "Prevents all information sharing", D: "Removes legal rights" },
        answer: "A"
    },
    {
        q: "What is computer crime?",
        options: { A: "Legal use of computers", B: "Crime involving computers or networks", C: "Computer manufacturing", D: "Programming only" },
        answer: "B"
    },
    {
        q: "Which of the following is a type of computer crime?",
        options: { A: "Electronic fraud", B: "Data theft", C: "Misuse of devices", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Identity theft is mainly associated with:",
        options: { A: "Hardware repair", B: "Financial fraud", C: "Software development", D: "Gaming" },
        answer: "B"
    },
    {
        q: "Computer trespassing involves:",
        options: { A: "Authorized access", B: "Unauthorized access to computer systems", C: "Building networks", D: "Software installation" },
        answer: "B"
    },
    {
        q: "Which method is commonly used for computer trespassing?",
        options: { A: "Clicking malicious attachments", B: "Installing antivirus", C: "Using strong passwords", D: "Encrypting files" },
        answer: "A"
    },
    {
        q: "Hardware hijacking can target:",
        options: { A: "Printers", B: "Speakers", C: "Monitors", D: "Scanners" },
        answer: "A"
    },
    {
        q: "DDoS stands for:",
        options: { A: "Distributed denial of service", B: "Direct denial of security", C: "Data delivery of systems", D: "Distributed data operation system" },
        answer: "A"
    },
    {
        q: "A zombie computer is:",
        options: { A: "A damaged computer", B: "A hacked computer controlled remotely", C: "An offline computer", D: "A repaired computer" },
        answer: "B"
    },
    {
        q: "Information warfare involves:",
        options: { A: "Playing online games", B: "Large-scale attacks on systems and networks", C: "Hardware upgrades", D: "Legal software use" },
        answer: "B"
    },
    {
        q: "Hacking means:",
        options: { A: "Authorized access", B: "Intentional unauthorized access", C: "Computer repair", D: "Data backup" },
        answer: "B"
    },
    {
        q: "A hacker in the 1960s was considered:",
        options: { A: "A criminal", B: "A creative programmer", C: "A hardware engineer", D: "A teacher" },
        answer: "B"
    },
    {
        q: "Which phase of hacking focused on intellectual challenge?",
        options: { A: "Phase 1", B: "Phase 2", C: "Phase 3", D: "Phase 4" },
        answer: "A"
    },
    {
        q: "Which crime became common in the mid-1990s?",
        options: { A: "Web-based hacking", B: "Farming", C: "Manufacturing", D: "Printing" },
        answer: "A"
    },
    {
        q: "The Love Bug virus caused:",
        options: { A: "Improved security", B: "Massive global damage", C: "Faster internet", D: "Data recovery" },
        answer: "B"
    },
    {
        q: "Which type of hacking targets websites?",
        options: { A: "Website hacking", B: "Net hacking", C: "Ethical hacking", D: "Password hacking" },
        answer: "A"
    },
    {
        q: "Password cracking using all possible combinations is called:",
        options: { A: "Ethical hacking", B: "Brute force attack", C: "Dictionary attack", D: "Email hacking" },
        answer: "B"
    },
    {
        q: "Dictionary attacks use:",
        options: { A: "Random symbols", B: "Predefined passwords", C: "Encryption keys", D: "Hardware tools" },
        answer: "B"
    },
    {
        q: "Ethical hacking is also called:",
        options: { A: "Black hat hacking", B: "White hat hacking", C: "Illegal hacking", D: "Password hacking" },
        answer: "B"
    },
    {
        q: "Email hacking refers to:",
        options: { A: "Creating email accounts", B: "Unauthorized access to email", C: "Sending legal emails", D: "Installing email software" },
        answer: "B"
    },
    {
        q: "Computer hacking involves:",
        options: { A: "Authorized file editing", B: "Unauthorized viewing or deleting of files", C: "Legal data access", D: "Hardware maintenance" },
        answer: "B"
    },
    {
        q: "Which type of exploit spreads without human intervention?",
        options: { A: "Trojan horse", B: "Worm", C: "Spam", D: "Phishing" },
        answer: "B"
    },
    {
        q: "A virus is usually:",
        options: { A: "Hardware damage", B: "Programming code causing harmful behavior", C: "Antivirus software", D: "A firewall" },
        answer: "B"
    },
    {
        q: "Worms reside in:",
        options: { A: "Printers", B: "Active memory", C: "Routers only", D: "Flash drives only" },
        answer: "B"
    },
    {
        q: "Trojan horses are:",
        options: { A: "Safe software", B: "Malicious code hidden in harmless programs", C: "Antivirus tools", D: "Network cables" },
        answer: "B"
    },
    {
        q: "A logic bomb executes when:",
        options: { A: "Antivirus is installed", B: "A specific event triggers it", C: "The computer shuts down", D: "The internet disconnects" },
        answer: "B"
    },
    {
        q: "A botnet is:",
        options: { A: "Antivirus software", B: "Group of zombie computers", C: "Password manager", D: "Network cable" },
        answer: "B"
    },
    {
        q: "Rootkits allow attackers to:",
        options: { A: "Repair systems", B: "Gain administrator-level access", C: "Install printers", D: "Improve security" },
        answer: "B"
    },
    {
        q: "Spam refers to:",
        options: { A: "Secure emails", B: "Unsolicited bulk email", C: "Antivirus software", D: "Encryption" },
        answer: "B"
    },
    {
        q: "Phishing attempts to:",
        options: { A: "Increase internet speed", B: "Trick users into revealing personal data", C: "Repair computers", D: "Improve security" },
        answer: "B"
    },
    {
        q: "Smishing is phishing through:",
        options: { A: "Voice calls", B: "Text messages", C: "Websites", D: "Printers" },
        answer: "B"
    },
    {
        q: "Vishing is phishing through:",
        options: { A: "Voice messages", B: "Emails", C: "Websites", D: "Images" },
        answer: "A"
    },
    {
        q: "Spear-phishing targets:",
        options: { A: "General public only", B: "Specific organization employees", C: "Hardware devices", D: "Printers" },
        answer: "B"
    },
    {
        q: "Zero-day attack occurs:",
        options: { A: "After software patching", B: "Before vulnerability is fixed", C: "During updates only", D: "After antivirus installation" },
        answer: "B"
    },
    {
        q: "A patch is used to:",
        options: { A: "Create viruses", B: "Fix vulnerabilities", C: "Slow down systems", D: "Damage files" },
        answer: "B"
    },
    {
        q: "Increased system complexity results in:",
        options: { A: "Fewer vulnerabilities", B: "More vulnerabilities", C: "Reduced risks", D: "Better passwords" },
        answer: "B"
    },
    {
        q: "Cloud computing increases:",
        options: { A: "Isolation", B: "Entry points for attacks", C: "Hardware failures", D: "Printer speed" },
        answer: "B"
    },
    {
        q: "Script kiddies are:",
        options: { A: "Skilled ethical hackers", B: "Inexperienced hackers", C: "Hardware engineers", D: "Teachers" },
        answer: "B"
    },
    {
        q: "Crackers are involved in:",
        options: { A: "Legal hacking", B: "Criminal hacking", C: "Software testing", D: "Data backup" },
        answer: "B"
    },
    {
        q: "Industrial espionage uses:",
        options: { A: "Legal methods", B: "Illegal methods to obtain trade secrets", C: "Antivirus software", D: "Firewalls" },
        answer: "B"
    },
    {
        q: "Competitive intelligence uses:",
        options: { A: "Illegal spying", B: "Legal public information gathering", C: "Data theft", D: "Hacking" },
        answer: "B"
    },
    {
        q: "Cybercriminals mainly seek:",
        options: { A: "Entertainment", B: "Financial gain", C: "Education", D: "Hardware repair" },
        answer: "B"
    },
    {
        q: "Chargebacks are:",
        options: { A: "Antivirus programs", B: "Disputed transactions", C: "Password attacks", D: "Firewalls" },
        answer: "B"
    },
    {
        q: "CVV is used to:",
        options: { A: "Improve graphics", B: "Reduce credit card fraud", C: "Install software", D: "Speed up systems" },
        answer: "B"
    },
    {
        q: "Hacktivism aims to achieve:",
        options: { A: "Financial gain", B: "Political or social goals", C: "Hardware repair", D: "Gaming" },
        answer: "B"
    },
    {
        q: "Cyberterrorists seek to:",
        options: { A: "Gather information only", B: "Cause fear and disruption", C: "Install software", D: "Improve security" },
        answer: "B"
    },
    {
        q: "Which exploit often spreads through email attachments?",
        options: { A: "Virus", B: "Firewall", C: "Router", D: "Scanner" },
        answer: "A"
    },
    {
        q: "Which exploit duplicates itself?",
        options: { A: "Worm", B: "Spam", C: "Patch", D: "Printer" },
        answer: "A"
    },
    {
        q: "Which attack floods a website with requests?",
        options: { A: "DDoS attack", B: "Ethical hacking", C: "Password cracking", D: "Data backup" },
        answer: "A"
    },
    {
        q: "Which type of insider is difficult to detect?",
        options: { A: "Malicious insider", B: "Customer", C: "Visitor", D: "Student" },
        answer: "A"
    },
    {
        q: "Collusion means:",
        options: { A: "Legal investigation", B: "Cooperation between insider and outsider", C: "Antivirus installation", D: "Data encryption" },
        answer: "B"
    },
    {
        q: "Which attack takes advantage of a system weakness?",
        options: { A: "Exploit", B: "Firewall", C: "Backup", D: "Compression" },
        answer: "A"
    },
    {
        q: "Which type of hacker tests systems out of curiosity?",
        options: { A: "Hacker", B: "Cyberterrorist", C: "Criminal", D: "Spy" },
        answer: "A"
    },
    {
        q: "Which attack occurs before a vulnerability is fixed?",
        options: { A: "Spam attack", B: "Zero-day attack", C: "Firewall attack", D: "Backup attack" },
        answer: "B"
    },
    {
        q: "Which malicious program hides inside harmless software?",
        options: { A: "Worm", B: "Trojan horse", C: "Spam", D: "Patch" },
        answer: "B"
    },
    {
        q: "Which attack spreads through infected websites?",
        options: { A: "Virus", B: "Hardware repair", C: "Formatting", D: "Compression" },
        answer: "A"
    },
    {
        q: "Which group seeks destruction for political goals?",
        options: { A: "Cyberterrorists", B: "Ethical hackers", C: "Teachers", D: "Students" },
        answer: "A"
    },
    {
        q: "What is the primary purpose of a patch?",
        options: { A: "Damage systems", B: "Remove vulnerabilities", C: "Slow networks", D: "Increase spam" },
        answer: "B"
    },
    {
        q: "Which activity is considered ethical hacking?",
        options: { A: "Stealing passwords", B: "Identifying and fixing system weaknesses", C: "Destroying files", D: "Sending spam" },
        answer: "B"
    },
    {
        q: "Which of the following is a common phishing method?",
        options: { A: "Fraudulent email", B: "Secure backup", C: "Software update", D: "File compression" },
        answer: "A"
    },
    {
        q: "What is one result of a worm attack?",
        options: { A: "Improved security", B: "Lost productivity", C: "Faster systems", D: "Reduced storage" },
        answer: "B"
    },
    {
        q: "Which exploit may install a backdoor on a computer?",
        options: { A: "Virus", B: "Firewall", C: "Printer", D: "Scanner" },
        answer: "A"
    },
    {
        q: "Which criminal activity uses stolen passwords?",
        options: { A: "Ethical hacking", B: "Computer fraud", C: "Software testing", D: "Hardware repair" },
        answer: "B"
    },
    {
        q: "Which type of hacker may steal business information?",
        options: { A: "Criminal hacker", B: "Ethical hacker", C: "Student programmer", D: "Teacher" },
        answer: "A"
    },
    {
        q: "Which attack can make websites unavailable?",
        options: { A: "DDoS attack", B: "Data backup", C: "Compression", D: "Printing" },
        answer: "A"
    },
    {
        q: "Which system component may contain known vulnerabilities?",
        options: { A: "Commercial software", B: "Keyboard", C: "Mouse", D: "Speaker" },
        answer: "A"
    },
    {
        q: "What is one effect of information warfare?",
        options: { A: "Increased productivity", B: "Network disruption", C: "Better security", D: "Reduced internet use" },
        answer: "B"
    },
    {
        q: "Which attack commonly uses social engineering?",
        options: { A: "Phishing", B: "Backup", C: "Compression", D: "Formatting" },
        answer: "A"
    },
    {
        q: "Which term refers to harmful programming code?",
        options: { A: "Virus", B: "Patch", C: "Firewall", D: "Router" },
        answer: "A"
    },
    {
        q: "What is one purpose of spam emails?",
        options: { A: "Marketing questionable products", B: "Improving privacy", C: "Encrypting files", D: "Installing updates" },
        answer: "A"
    },
    {
        q: "Which type of perpetrator seeks financial gain?",
        options: { A: "Cybercriminal", B: "Ethical hacker", C: "Teacher", D: "Student" },
        answer: "A"
    },
    {
        q: "What does a rootkit help attackers achieve?",
        options: { A: "Administrator-level control", B: "Faster printing", C: "Better graphics", D: "Improved backups" },
        answer: "A"
    },
    {
        q: "Which attack uses text messages?",
        options: { A: "Smishing", B: "Vishing", C: "DDoS", D: "Worm" },
        answer: "A"
    },
    {
        q: "Which exploit spreads automatically between systems?",
        options: { A: "Worm", B: "Printer", C: "Scanner", D: "Router" },
        answer: "A"
    },
    {
        q: "Which attack may overload a website server?",
        options: { A: "DDoS attack", B: "Backup", C: "Compression", D: "Formatting" },
        answer: "A"
    },
    {
        q: "Which of the following is considered computer fraud?",
        options: { A: "Identity theft", B: "Password sharing", C: "Data backup", D: "Printing" },
        answer: "A"
    },
    {
        q: "Which term describes unauthorized access to a computer?",
        options: { A: "Hacking", B: "Encryption", C: "Formatting", D: "Compression" },
        answer: "A"
    },
    {
        q: "Which attack targets human trust?",
        options: { A: "Phishing", B: "Firewall", C: "Backup", D: "Compression" },
        answer: "A"
    },
    {
        q: "What is the role of encryption in online transactions?",
        options: { A: "Protect data", B: "Delete files", C: "Slow networks", D: "Create viruses" },
        answer: "A"
    },
    {
        q: "Which exploit can reside in memory?",
        options: { A: "Worm", B: "Printer", C: "Scanner", D: "Mouse" },
        answer: "A"
    },
    {
        q: "Which of the following may spread through removable media?",
        options: { A: "Trojan horse", B: "Keyboard", C: "Speaker", D: "Monitor" },
        answer: "A"
    },
    {
        q: "Which activity is illegal?",
        options: { A: "Industrial espionage", B: "Competitive intelligence", C: "Ethical hacking", D: "Security testing" },
        answer: "A"
    },
    {
        q: "Which attack attempts to steal personal data?",
        options: { A: "Phishing", B: "Backup", C: "Compression", D: "Formatting" },
        answer: "A"
    },
    {
        q: "Which type of insider threat is accidental?",
        options: { A: "Negligent insider", B: "Ethical hacker", C: "Teacher", D: "Student" },
        answer: "A"
    },
    {
        q: "Which exploit may be hidden in downloaded programs?",
        options: { A: "Trojan horse", B: "Firewall", C: "Router", D: "Switch" },
        answer: "A"
    },
    {
        q: "Which of the following is a cybercrime objective?",
        options: { A: "Theft", B: "Fraud", C: "Harassment", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which attack can spread malicious code?",
        options: { A: "Information warfare", B: "Compression", C: "Formatting", D: "Printing" },
        answer: "A"
    },
    {
        q: "Which group may attempt business espionage?",
        options: { A: "Industrial spies", B: "Teachers", C: "Students", D: "Ethical hackers" },
        answer: "A"
    },
    {
        q: "Which malicious software may execute on a trigger?",
        options: { A: "Logic bomb", B: "Patch", C: "Firewall", D: "Antivirus" },
        answer: "A"
    },
    {
        q: "Which exploit often arrives through email attachments?",
        options: { A: "Trojan horse", B: "Printer", C: "Router", D: "Keyboard" },
        answer: "A"
    },
    {
        q: "Which activity helps reduce online fraud?",
        options: { A: "Using transaction-risk scoring", B: "Sharing passwords", C: "Ignoring updates", D: "Disabling encryption" },
        answer: "A"
    },
    {
        q: "Which attack type involves many infected computers?",
        options: { A: "Botnet attack", B: "Formatting", C: "Backup", D: "Compression" },
        answer: "A"
    },
    {
        q: "Which type of hacker may release viruses intentionally?",
        options: { A: "Criminal hacker", B: "Ethical hacker", C: "Teacher", D: "Student" },
        answer: "A"
    },
    {
        q: "Which exploit can conceal its presence on a system?",
        options: { A: "Rootkit", B: "Printer", C: "Scanner", D: "Router" },
        answer: "A"
    },
    {
        q: "Which technique verifies online credit card use?",
        options: { A: "CVV checking", B: "File compression", C: "Formatting", D: "Printing" },
        answer: "A"
    },
    {
        q: "Which exploit is often disguised as useful software?",
        options: { A: "Trojan horse", B: "Patch", C: "Firewall", D: "Antivirus" },
        answer: "A"
    },
    {
        q: "Which group may use hacking for activism?",
        options: { A: "Hacktivists", B: "Printers", C: "Students", D: "Teachers" },
        answer: "A"
    },
    {
        q: "Which cybercrime targets confidential business information?",
        options: { A: "Industrial espionage", B: "Formatting", C: "Compression", D: "Printing" },
        answer: "A"
    },
    {
        q: "Which exploit may disrupt critical services?",
        options: { A: "Worm", B: "Keyboard", C: "Monitor", D: "Mouse" },
        answer: "A"
    },
    {
        q: "Which action increases vulnerability to attacks?",
        options: { A: "Delaying software patches", B: "Using encryption", C: "Installing updates", D: "Using antivirus" },
        answer: "A"
    },
    {
        q: "Which statement best describes computer crime?",
        options: { A: "Illegal activity involving computers or networks", B: "Legal software installation", C: "Computer education only", D: "Data backup process" },
        answer: "A"
    },
    {
        q: "What is ethics?",
        options: { A: "Study of computers", B: "Branch of philosophy dealing with moral principles", C: "Study of finance", D: "Business law only" },
        answer: "B"
    },
    {
        q: "Business ethics focuses on:",
        options: { A: "Computer programming", B: "Right and wrong behavior in business", C: "Manufacturing products", D: "Tax collection" },
        answer: "B"
    },
    {
        q: "Ethics helps individuals decide:",
        options: { A: "How to hack systems", B: "What is fair and right", C: "How to avoid taxes", D: "How to maximize losses" },
        answer: "B"
    },
    {
        q: "Which of the following is a responsibility of business executives?",
        options: { A: "Ignoring customers", B: "Maintaining ethical principles", C: "Breaking laws", D: "Avoiding profits" },
        answer: "B"
    },
    {
        q: "Ethics applied to business situations is called:",
        options: { A: "Social ethics", B: "Professional ethics", C: "Business ethics", D: "Moral accounting" },
        answer: "C"
    },
    {
        q: "The law is:",
        options: { A: "Completely different from ethics", B: "An expression of society's ethical beliefs", C: "Always unethical", D: "Not related to morality" },
        answer: "B"
    },
    {
        q: "An act can be:",
        options: { A: "Ethical but illegal only", B: "Legal but unethical", C: "Illegal and ethical always", D: "Neither legal nor ethical" },
        answer: "B"
    },
    {
        q: "Which ethical theory focuses on duties?",
        options: { A: "Utilitarianism", B: "Rights model", C: "Deontology", D: "Social accounting" },
        answer: "C"
    },
    {
        q: "Deontology means:",
        options: { A: "Doing what benefits most people", B: "Doing the right thing because it is your duty", C: "Following public opinion", D: "Maximizing profits" },
        answer: "B"
    },
    {
        q: "Utilitarianism is based on:",
        options: { A: "Human rights", B: "Consequences of actions", C: "Duties only", D: "Government rules" },
        answer: "B"
    },
    {
        q: "Utilitarianism chooses actions that:",
        options: { A: "Benefit one person only", B: "Bring greatest good for greatest number", C: "Ignore consequences", D: "Follow traditions" },
        answer: "B"
    },
    {
        q: "The rights model focuses on:",
        options: { A: "Company profits", B: "Respecting human rights", C: "Production methods", D: "Tax systems" },
        answer: "B"
    },
    {
        q: "Under the rights model, every person:",
        options: { A: "Has equal human rights", B: "Has no moral value", C: "Is judged by wealth", D: "Is judged by profession" },
        answer: "A"
    },
    {
        q: "Which are the two categories of human rights?",
        options: { A: "Liberty and well-being", B: "Taxes and profit", C: "Finance and law", D: "Marketing and sales" },
        answer: "A"
    },
    {
        q: "Which ethical theory uses cost-benefit analysis?",
        options: { A: "Rights model", B: "Deontology", C: "Utilitarianism", D: "Accounting ethics" },
        answer: "C"
    },
    {
        q: "Ethics for employees includes:",
        options: { A: "Integrity", B: "Loyalty", C: "Confidentiality", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Integrity means:",
        options: { A: "Dishonesty", B: "Ethical honesty and strong moral principles", C: "Ignoring rules", D: "Breaking promises" },
        answer: "B"
    },
    {
        q: "Confidentiality of information means:",
        options: { A: "Sharing secrets publicly", B: "Protecting sensitive information", C: "Ignoring data privacy", D: "Selling customer records" },
        answer: "B"
    },
    {
        q: "Which of the following is part of business ethics?",
        options: { A: "Fairness", B: "Loyalty", C: "Legality", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Ethics and law are:",
        options: { A: "Exactly the same", B: "Completely unrelated", C: "Related but not identical", D: "Always contradictory" },
        answer: "C"
    },
    {
        q: "What is business?",
        options: { A: "Illegal activity", B: "Economic and social activity for profit", C: "Government operation only", D: "Charity work only" },
        answer: "B"
    },
    {
        q: "Business satisfies:",
        options: { A: "Human wants", B: "Government demands only", C: "Computer systems", D: "Legal disputes" },
        answer: "A"
    },
    {
        q: "Which is a type of business?",
        options: { A: "Trading", B: "Manufacturing", C: "Services", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Trading businesses are engaged in:",
        options: { A: "Manufacturing goods", B: "Buying and selling goods", C: "Selling services only", D: "Government accounting" },
        answer: "B"
    },
    {
        q: "Manufacturing businesses:",
        options: { A: "Produce and sell goods", B: "Buy and sell shares", C: "Only advertise products", D: "Only import products" },
        answer: "A"
    },
    {
        q: "Service businesses are engaged in:",
        options: { A: "Producing machinery", B: "Selling services", C: "Manufacturing cars", D: "Mining activities" },
        answer: "B"
    },
    {
        q: "A business organization is:",
        options: { A: "An unorganized group", B: "A group working toward common business objectives", C: "A government department only", D: "A social club" },
        answer: "B"
    },
    {
        q: "Which is NOT a basic type of business organization?",
        options: { A: "Sole proprietorship", B: "Partnership", C: "Company", D: "Parliament" },
        answer: "D"
    },
    {
        q: "Sole proprietorship is owned by:",
        options: { A: "Government", B: "One person", C: "Shareholders only", D: "Society" },
        answer: "B"
    },
    {
        q: "Partnership means:",
        options: { A: "Business owned by partners", B: "Government ownership", C: "Non-profit activity", D: "Charity organization" },
        answer: "A"
    },
    {
        q: "Accounting involves:",
        options: { A: "Recording financial transactions", B: "Ignoring financial records", C: "Selling products", D: "Political campaigning" },
        answer: "A"
    },
    {
        q: "Financial accounting provides:",
        options: { A: "Information about business operations", B: "Medical advice", C: "Legal punishments", D: "Computer programming" },
        answer: "A"
    },
    {
        q: "Cost accounting focuses on:",
        options: { A: "Advertising only", B: "Measuring and controlling costs", C: "Hiring employees", D: "Public speaking" },
        answer: "B"
    },
    {
        q: "Managerial accounting helps management:",
        options: { A: "Increase taxes", B: "Select maximum output alternatives", C: "Close businesses", D: "Avoid planning" },
        answer: "B"
    },
    {
        q: "Government accounting records:",
        options: { A: "Sports activities", B: "Revenues, taxes, and expenditures", C: "Manufacturing methods", D: "Internet crimes" },
        answer: "B"
    },
    {
        q: "Auditing verifies:",
        options: { A: "Product quality only", B: "Fairness and reliability of financial statements", C: "Social activities", D: "Tax rates" },
        answer: "B"
    },
    {
        q: "Tax accounting prepares:",
        options: { A: "Marketing reports", B: "Tax returns", C: "Employee contracts", D: "Political speeches" },
        answer: "B"
    },
    {
        q: "Budgetary accounting develops:",
        options: { A: "Future organizational plans", B: "Computer viruses", C: "Employee uniforms", D: "Marketing campaigns" },
        answer: "A"
    },
    {
        q: "Social accounting measures:",
        options: { A: "Political influence", B: "Social costs and benefits", C: "Hardware quality", D: "Government salaries" },
        answer: "B"
    },
    {
        q: "Not-for-profit accounting is used for:",
        options: { A: "Private corporations only", B: "Non-profit organizations", C: "Criminal organizations", D: "Gaming companies" },
        answer: "B"
    },
    {
        q: "Which ethical model emphasizes moral duties?",
        options: { A: "Deontology", B: "Utilitarianism", C: "Rights model", D: "Accounting theory" },
        answer: "A"
    },
    {
        q: "Which ethical theory focuses on outcomes?",
        options: { A: "Utilitarianism", B: "Deontology", C: "Rights model", D: "Financial accounting" },
        answer: "A"
    },
    {
        q: "Under deontology, actions are judged by:",
        options: { A: "Results only", B: "Moral rightness", C: "Public opinion", D: "Financial profit" },
        answer: "B"
    },
    {
        q: "The rights model values:",
        options: { A: "Human dignity", B: "Product prices", C: "Advertising", D: "Technology only" },
        answer: "A"
    },
    {
        q: "Which model minimizes violations of rights?",
        options: { A: "Rights model", B: "Budgetary accounting", C: "Manufacturing model", D: "Trading model" },
        answer: "A"
    },
    {
        q: "Which ethical theory is popular in business decisions?",
        options: { A: "Utilitarianism", B: "None", C: "Illegal practices", D: "Tax evasion" },
        answer: "A"
    },
    {
        q: "Ethical employees should show:",
        options: { A: "Fairness", B: "Integrity", C: "Loyalty", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which is considered unethical?",
        options: { A: "Honesty", B: "Lying", C: "Fairness", D: "Integrity" },
        answer: "B"
    },
    {
        q: "Human rights are:",
        options: { A: "Limited to employees", B: "Rights possessed by all humans", C: "Government privileges only", D: "Business contracts" },
        answer: "B"
    },
    {
        q: "Which accounting field adds credibility to statements?",
        options: { A: "Auditing", B: "Trading", C: "Manufacturing", D: "Marketing" },
        answer: "A"
    },
    {
        q: "Which accounting field records operating costs?",
        options: { A: "Cost accounting", B: "Social accounting", C: "Tax accounting", D: "Government accounting" },
        answer: "A"
    },
    {
        q: "Which accounting field prepares annual budgets?",
        options: { A: "Government accounting", B: "Budgetary accounting", C: "Financial accounting", D: "Auditing" },
        answer: "B"
    },
    {
        q: "Ethics mainly deals with:",
        options: { A: "Moral principles", B: "Hardware repair", C: "Software installation", D: "Graphic design" },
        answer: "A"
    },
    {
        q: "Business people have responsibility toward:",
        options: { A: "Shareholders", B: "Employees", C: "Public", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which ethical theory asks whether an action is morally right?",
        options: { A: "Deontology", B: "Utilitarianism", C: "Trading theory", D: "Financial theory" },
        answer: "A"
    },
    {
        q: "Utilitarianism aims to:",
        options: { A: "Maximize harm", B: "Produce greatest good", C: "Ignore stakeholders", D: "Increase taxes" },
        answer: "B"
    },
    {
        q: "Which is a stakeholder in business?",
        options: { A: "Employees", B: "Customers", C: "Shareholders", D: "All of the above" },
        answer: "D"
    },
    {
        q: "The rights model focuses on:",
        options: { A: "Financial profit", B: "Human rights and dignity", C: "Tax reduction", D: "Manufacturing" },
        answer: "B"
    },
    {
        q: "Which right category is included in the rights model?",
        options: { A: "Liberty", B: "Well-being", C: "Both A and B", D: "None of these" },
        answer: "C"
    },
    {
        q: "Ethical conduct theories provide:",
        options: { A: "Standards to evaluate behavior", B: "Computer security", C: "Tax exemptions", D: "Network access" },
        answer: "A"
    },
    {
        q: "Which field measures efficiency of government departments?",
        options: { A: "Government accounting", B: "Trading", C: "Manufacturing", D: "Marketing" },
        answer: "A"
    },
    {
        q: "Financial accounting prepares:",
        options: { A: "Formal financial statements", B: "Medical reports", C: "Criminal records", D: "Political speeches" },
        answer: "A"
    },
    {
        q: "Which accounting field compares actual operations with plans?",
        options: { A: "Budgetary accounting", B: "Tax accounting", C: "Social accounting", D: "Auditing" },
        answer: "A"
    },
    {
        q: "Which business type sells services?",
        options: { A: "Service business", B: "Trading business", C: "Manufacturing business", D: "Partnership" },
        answer: "A"
    },
    {
        q: "Which ethical principle involves honesty?",
        options: { A: "Integrity", B: "Loyalty", C: "Secrecy", D: "Harassment" },
        answer: "A"
    },
    {
        q: "Which principle requires protecting private information?",
        options: { A: "Confidentiality", B: "Fairness", C: "Taxation", D: "Competition" },
        answer: "A"
    },
    {
        q: "Which is NOT an ethical principle?",
        options: { A: "Fraud", B: "Integrity", C: "Loyalty", D: "Fairness" },
        answer: "A"
    },
    {
        q: "Business ethics applies ethics to:",
        options: { A: "Sports", B: "Business situations", C: "Computer graphics", D: "Entertainment" },
        answer: "B"
    },
    {
        q: "An action may be unethical even if:",
        options: { A: "It is legal", B: "It is profitable", C: "It is popular", D: "All of the above" },
        answer: "A"
    },
    {
        q: "Which accounting field records non-profit organization activities?",
        options: { A: "Not-for-profit accounting", B: "Financial accounting", C: "Cost accounting", D: "Trading" },
        answer: "A"
    },
    {
        q: "Which accounting field measures social benefits?",
        options: { A: "Social accounting", B: "Tax accounting", C: "Auditing", D: "Manufacturing" },
        answer: "A"
    },
    {
        q: "Ethics provides:",
        options: { A: "Moral guidelines", B: "Hacking methods", C: "Tax loopholes", D: "Virus protection" },
        answer: "A"
    },
    {
        q: "Deontology focuses on:",
        options: { A: "Consequences", B: "Duty", C: "Profit only", D: "Competition" },
        answer: "B"
    },
    {
        q: "Which theory supports doing the right thing regardless of results?",
        options: { A: "Deontology", B: "Utilitarianism", C: "Marketing theory", D: "Accounting theory" },
        answer: "A"
    },
    {
        q: "Which ethical theory evaluates costs and benefits?",
        options: { A: "Utilitarianism", B: "Deontology", C: "Rights model", D: "Financial accounting" },
        answer: "A"
    },
    {
        q: "Which business activity involves producing goods?",
        options: { A: "Manufacturing", B: "Trading", C: "Services", D: "Auditing" },
        answer: "A"
    },
    {
        q: "Which organization type is owned by one person?",
        options: { A: "Sole proprietorship", B: "Partnership", C: "Company", D: "Corporation" },
        answer: "A"
    },
    {
        q: "Partnership businesses are owned by:",
        options: { A: "Government only", B: "Multiple partners", C: "One shareholder", D: "Non-profit groups" },
        answer: "B"
    },
    {
        q: "Accounting is the art of:",
        options: { A: "Recording and summarizing transactions", B: "Hacking systems", C: "Advertising products", D: "Manufacturing goods" },
        answer: "A"
    },
    {
        q: "Which ethical model values each person equally?",
        options: { A: "Rights model", B: "Trading theory", C: "Marketing theory", D: "Financial theory" },
        answer: "A"
    },
    {
        q: "Which theory is consequence-based?",
        options: { A: "Utilitarianism", B: "Deontology", C: "Rights model", D: "Auditing" },
        answer: "A"
    },
    {
        q: "Which accounting field verifies financial reliability?",
        options: { A: "Auditing", B: "Tax accounting", C: "Cost accounting", D: "Social accounting" },
        answer: "A"
    },
    {
        q: "Which principle means following laws?",
        options: { A: "Legality", B: "Fraud", C: "Theft", D: "Hacking" },
        answer: "A"
    },
    {
        q: "Which ethical principle means treating others fairly?",
        options: { A: "Fairness", B: "Corruption", C: "Harassment", D: "Negligence" },
        answer: "A"
    },
    {
        q: "Which accounting field helps control costs?",
        options: { A: "Cost accounting", B: "Social accounting", C: "Tax accounting", D: "Government accounting" },
        answer: "A"
    },
    {
        q: "Which business activity aims to earn profit?",
        options: { A: "Business", B: "Charity only", C: "Entertainment only", D: "Politics only" },
        answer: "A"
    },
    {
        q: "Ethics in business encourages:",
        options: { A: "Responsible behavior", B: "Fraudulent practices", C: "Corruption", D: "Theft" },
        answer: "A"
    },
    {
        q: "Which model seeks maximum social benefit?",
        options: { A: "Utilitarianism", B: "Deontology", C: "Rights model", D: "Financial accounting" },
        answer: "A"
    },
    {
        q: "Which accounting field prepares tax returns?",
        options: { A: "Tax accounting", B: "Financial accounting", C: "Auditing", D: "Budgetary accounting" },
        answer: "A"
    },
    {
        q: "Which ethical principle involves devotion to the organization?",
        options: { A: "Loyalty", B: "Fraud", C: "Corruption", D: "Theft" },
        answer: "A"
    },
    {
        q: "Which type of accounting is a new field?",
        options: { A: "Social accounting", B: "Financial accounting", C: "Tax accounting", D: "Cost accounting" },
        answer: "A"
    },
    {
        q: "Business organizations work toward:",
        options: { A: "Common objectives", B: "Political goals only", C: "Personal hobbies", D: "Criminal activities" },
        answer: "A"
    },
    {
        q: "Which accounting field assists managerial decisions?",
        options: { A: "Managerial accounting", B: "Tax accounting", C: "Auditing", D: "Social accounting" },
        answer: "A"
    },
    {
        q: "Which ethical principle means careful treatment of work?",
        options: { A: "Consideration for work", B: "Negligence", C: "Corruption", D: "Harassment" },
        answer: "A"
    },
    {
        q: "Which accounting field records taxes and expenditures?",
        options: { A: "Government accounting", B: "Trading", C: "Services", D: "Manufacturing" },
        answer: "A"
    },
    {
        q: "Utilitarianism measures:",
        options: { A: "Social benefit", B: "Hardware speed", C: "Network quality", D: "Product color" },
        answer: "A"
    },
    {
        q: "Which theory emphasizes universal duties?",
        options: { A: "Deontology", B: "Utilitarianism", C: "Marketing", D: "Budgeting" },
        answer: "A"
    },
    {
        q: "Which activity is part of accounting?",
        options: { A: "Reporting financial transactions", B: "Hacking systems", C: "Sending spam", D: "Building networks" },
        answer: "A"
    },
    {
        q: "Which ethical principle discourages disclosure of secrets?",
        options: { A: "Confidentiality", B: "Fraud", C: "Theft", D: "Corruption" },
        answer: "A"
    },
    {
        q: "Business ethics promotes:",
        options: { A: "Ethical decision-making", B: "Illegal profit-making", C: "Data theft", D: "Corruption" },
        answer: "A"
    },
    {
        q: "A manager notices that an employee manipulated sales figures to meet monthly targets. What ethical issue is involved?",
        options: { A: "Transparency", B: "Dishonesty", C: "Innovation", D: "Productivity" },
        answer: "B"
    },
    {
        q: "A company refuses to dump waste into a river despite lower disposal costs. Which principle is being followed?",
        options: { A: "Profit maximization", B: "Confidentiality", C: "Ethical responsibility", D: "Competition" },
        answer: "C"
    },
    {
        q: "A businessman sells expired medicines by changing labels. What is this an example of?",
        options: { A: "Fair trade", B: "Ethical behavior", C: "Fraudulent practice", D: "Social responsibility" },
        answer: "C"
    },
    {
        q: "A firm increases prices during a natural disaster to earn extra profit. Which ethical concern arises?",
        options: { A: "Fairness", B: "Teamwork", C: "Leadership", D: "Productivity" },
        answer: "A"
    },
    {
        q: "An employee shares confidential customer data with another company. Which ethical principle is violated?",
        options: { A: "Integrity", B: "Confidentiality", C: "Loyalty", D: "Fairness" },
        answer: "B"
    },
    {
        q: "A business owner pays taxes honestly despite having opportunities for tax evasion. Which value is demonstrated?",
        options: { A: "Integrity", B: "Secrecy", C: "Aggression", D: "Monopoly" },
        answer: "A"
    },
    {
        q: "A company hires workers below minimum wage to reduce costs. What ethical issue is involved?",
        options: { A: "Employee welfare", B: "Innovation", C: "Marketing", D: "Investment" },
        answer: "A"
    },
    {
        q: "A manager promotes his relative despite poor performance. Which principle is violated?",
        options: { A: "Fairness", B: "Legality", C: "Confidentiality", D: "Profitability" },
        answer: "A"
    },
    {
        q: "A company advertises false product benefits to increase sales. This practice is considered:",
        options: { A: "Ethical marketing", B: "Misleading advertising", C: "Customer care", D: "Public service" },
        answer: "B"
    },
    {
        q: "A factory provides safety equipment to all workers even though it is expensive. Which ethical principle is shown?",
        options: { A: "Employee well-being", B: "Cost reduction", C: "Monopoly", D: "Competition" },
        answer: "A"
    },
    {
        q: "A businessman refuses to bribe officials to win a contract. Which principle is reflected?",
        options: { A: "Integrity", B: "Manipulation", C: "Utilitarianism", D: "Favoritism" },
        answer: "A"
    },
    {
        q: "A company closes operations causing unemployment but saving shareholders from losses. Which ethical theory focuses on maximum benefit?",
        options: { A: "Deontology", B: "Utilitarianism", C: "Rights Model", D: "Justice Theory" },
        answer: "B"
    },
    {
        q: "A manager tells the truth to customers even if sales decrease. Which theory supports this action?",
        options: { A: "Utilitarianism", B: "Deontology", C: "Materialism", D: "Socialism" },
        answer: "B"
    },
    {
        q: "A business decision protects employee rights although profits decline. Which ethical model applies?",
        options: { A: "Rights Model", B: "Utilitarianism", C: "Monopoly Theory", D: "Market Theory" },
        answer: "A"
    },
    {
        q: "A company chooses the action that benefits the largest number of people. Which theory is used?",
        options: { A: "Rights Model", B: "Deontology", C: "Utilitarianism", D: "Capitalism" },
        answer: "C"
    },
    {
        q: "A cashier returns extra money mistakenly paid by a customer. Which value is demonstrated?",
        options: { A: "Dishonesty", B: "Integrity", C: "Greed", D: "Competition" },
        answer: "B"
    },
    {
        q: "A company refuses child labor despite lower production costs. Which ethical concern is addressed?",
        options: { A: "Human rights", B: "Competition", C: "Profitability", D: "Marketing" },
        answer: "A"
    },
    {
        q: "A manager hides product defects from customers. What ethical issue exists?",
        options: { A: "Fairness", B: "Deception", C: "Confidentiality", D: "Innovation" },
        answer: "B"
    },
    {
        q: "A business owner donates part of profits to community welfare. This is an example of:",
        options: { A: "Corruption", B: "Social responsibility", C: "Fraud", D: "Monopoly" },
        answer: "B"
    },
    {
        q: "An employee uses office resources for personal business without permission. What is this called?",
        options: { A: "Loyalty", B: "Misuse of resources", C: "Fairness", D: "Innovation" },
        answer: "B"
    },
    {
        q: "A company fires a disabled employee because productivity decreased. Which model would emphasize protecting employee dignity?",
        options: { A: "Rights Model", B: "Utilitarianism", C: "Accounting Theory", D: "Capitalism" },
        answer: "A"
    },
    {
        q: "A manager follows company rules even though results are unfavorable. Which theory supports this?",
        options: { A: "Utilitarianism", B: "Deontology", C: "Socialism", D: "Materialism" },
        answer: "B"
    },
    {
        q: "A company selects a policy that creates the greatest benefit for most stakeholders. Which theory applies?",
        options: { A: "Rights Model", B: "Deontology", C: "Utilitarianism", D: "Equality Theory" },
        answer: "C"
    },
    {
        q: "A worker reports corruption occurring in the company. This act is known as:",
        options: { A: "Bribery", B: "Whistleblowing", C: "Manipulation", D: "Monopoly" },
        answer: "B"
    },
    {
        q: "A company avoids pollution because society may suffer. Which ethical approach is reflected?",
        options: { A: "Utilitarianism", B: "Dishonesty", C: "Monopoly", D: "Favoritism" },
        answer: "A"
    },
    {
        q: "A salesman lies about product quality to achieve targets. Which principle is violated?",
        options: { A: "Integrity", B: "Loyalty", C: "Legality", D: "Fairness" },
        answer: "A"
    },
    {
        q: "A manager respects workers' freedom of speech at the workplace. Which model supports this action?",
        options: { A: "Rights Model", B: "Utilitarianism", C: "Accounting Theory", D: "Marketing Theory" },
        answer: "A"
    },
    {
        q: "A business continues producing harmful products because it is legal. Which statement is correct?",
        options: { A: "Legal actions are always ethical", B: "Ethical and legal actions are always same", C: "Legal actions may still be unethical", D: "Ethics and law are unrelated" },
        answer: "C"
    },
    {
        q: "A company chooses to recall defective products despite huge losses. Which ethical principle is followed?",
        options: { A: "Customer safety", B: "Monopoly", C: "Profit maximization", D: "Secrecy" },
        answer: "A"
    },
    {
        q: "An accountant changes financial statements to attract investors. This is an example of:",
        options: { A: "Transparency", B: "Fraud", C: "Loyalty", D: "Innovation" },
        answer: "B"
    },
    {
        q: "A company equally rewards employees based on performance. Which principle is demonstrated?",
        options: { A: "Fairness", B: "Secrecy", C: "Manipulation", D: "Monopoly" },
        answer: "A"
    },
    {
        q: "A manager protects confidential company information from competitors. Which principle applies?",
        options: { A: "Confidentiality", B: "Fairness", C: "Dishonesty", D: "Aggression" },
        answer: "A"
    },
    {
        q: "A business owner refuses to employ underage workers despite labor shortages. Which value is shown?",
        options: { A: "Integrity", B: "Greed", C: "Corruption", D: "Favoritism" },
        answer: "A"
    },
    {
        q: "A company gives accurate information in advertisements. Which ethical principle is reflected?",
        options: { A: "Truthfulness", B: "Manipulation", C: "Secrecy", D: "Aggression" },
        answer: "A"
    },
    {
        q: "An employee accepts gifts from suppliers in exchange for favors. What ethical issue arises?",
        options: { A: "Bribery", B: "Fairness", C: "Teamwork", D: "Productivity" },
        answer: "A"
    },
    {
        q: "A manager promotes ethical training programs for employees. What is the purpose?",
        options: { A: "Increase corruption", B: "Improve ethical standards", C: "Reduce communication", D: "Encourage secrecy" },
        answer: "B"
    },
    {
        q: "A company treats all customers equally regardless of background. Which principle is shown?",
        options: { A: "Discrimination", B: "Fairness", C: "Monopoly", D: "Aggression" },
        answer: "B"
    },
    {
        q: "A worker steals office supplies for personal use. Which ethical issue is involved?",
        options: { A: "Theft", B: "Loyalty", C: "Fairness", D: "Innovation" },
        answer: "A"
    },
    {
        q: "A company follows environmental laws but still harms nature indirectly. Which statement is true?",
        options: { A: "Legal means ethical", B: "Ethical standards may go beyond law", C: "Law and ethics are identical", D: "Ethics are unnecessary" },
        answer: "B"
    },
    {
        q: "A manager reports all financial records honestly to shareholders. Which value is demonstrated?",
        options: { A: "Integrity", B: "Corruption", C: "Manipulation", D: "Monopoly" },
        answer: "A"
    },
    {
        q: "A business owner keeps promises made to customers. Which principle is reflected?",
        options: { A: "Trustworthiness", B: "Secrecy", C: "Aggression", D: "Favoritism" },
        answer: "A"
    },
    {
        q: "A company hides health risks of its product from consumers. What ethical issue exists?",
        options: { A: "Transparency", B: "Consumer deception", C: "Teamwork", D: "Innovation" },
        answer: "B"
    },
    {
        q: "A business supports equal opportunities for men and women. Which principle applies?",
        options: { A: "Fairness", B: "Monopoly", C: "Secrecy", D: "Corruption" },
        answer: "A"
    },
    {
        q: "An employee uses insider information for personal profit. This practice is called:",
        options: { A: "Ethical trading", B: "Insider trading", C: "Teamwork", D: "Transparency" },
        answer: "B"
    },
    {
        q: "A company chooses suppliers who follow labor laws and ethical practices. Which concern is addressed?",
        options: { A: "Social responsibility", B: "Monopoly", C: "Aggression", D: "Secrecy" },
        answer: "A"
    },
    {
        q: "A manager refuses to discriminate against employees based on religion. Which principle is followed?",
        options: { A: "Fairness", B: "Favoritism", C: "Corruption", D: "Monopoly" },
        answer: "A"
    },
    {
        q: "A company installs safety alarms to protect workers from accidents. Which value is demonstrated?",
        options: { A: "Employee welfare", B: "Profit maximization", C: "Aggression", D: "Secrecy" },
        answer: "A"
    },
    {
        q: "A businessman lies to investors about company profits. What ethical issue is involved?",
        options: { A: "Fraud", B: "Fairness", C: "Teamwork", D: "Innovation" },
        answer: "A"
    },
    {
        q: "A company decides not to use harmful chemicals although competitors do. Which principle is shown?",
        options: { A: "Environmental ethics", B: "Monopoly", C: "Secrecy", D: "Aggression" },
        answer: "A"
    },
    {
        q: "A manager takes responsibility for company mistakes publicly. Which value is reflected?",
        options: { A: "Accountability", B: "Corruption", C: "Manipulation", D: "Favoritism" },
        answer: "A"
    },
    {
        q: "Who is a manager?",
        options: { A: "A person who works independently", B: "Someone who coordinates and oversees the work of others", C: "A customer of the organization", D: "A machine operator" },
        answer: "B"
    },
    {
        q: "First-line managers manage:",
        options: { A: "Top executives", B: "Customers", C: "Non-managerial employees", D: "Board members" },
        answer: "C"
    },
    {
        q: "Middle managers manage the work of:",
        options: { A: "Customers", B: "Top managers", C: "First-line managers", D: "Suppliers" },
        answer: "C"
    },
    {
        q: "Top managers are responsible for:",
        options: { A: "Cleaning offices", B: "Organization-wide decisions", C: "Preparing invoices only", D: "Machine maintenance" },
        answer: "B"
    },
    {
        q: "Management involves:",
        options: { A: "Ignoring employees", B: "Coordinating and overseeing work activities", C: "Working individually", D: "Avoiding goals" },
        answer: "B"
    },
    {
        q: "Efficiency means:",
        options: { A: "Doing the wrong things", B: "Doing things right", C: "Avoiding work", D: "Increasing waste" },
        answer: "B"
    },
    {
        q: "Effectiveness means:",
        options: { A: "Doing the right things", B: "Reducing productivity", C: "Ignoring goals", D: "Delaying work" },
        answer: "A"
    },
    {
        q: "Getting the most output for the least input is:",
        options: { A: "Innovation", B: "Planning", C: "Efficiency", D: "Leadership" },
        answer: "C"
    },
    {
        q: "Attaining organizational goals reflects:",
        options: { A: "Effectiveness", B: "Inefficiency", C: "Delegation", D: "Coordination" },
        answer: "A"
    },
    {
        q: "Which is NOT a function of management?",
        options: { A: "Planning", B: "Organizing", C: "Leading", D: "Sleeping" },
        answer: "D"
    },
    {
        q: "Planning involves:",
        options: { A: "Ignoring objectives", B: "Establishing strategies to achieve goals", C: "Reducing communication", D: "Hiring only" },
        answer: "B"
    },
    {
        q: "Organizing means:",
        options: { A: "Arranging resources and assigning responsibilities", B: "Avoiding teamwork", C: "Ignoring resources", D: "Reducing authority" },
        answer: "A"
    },
    {
        q: "Leading includes:",
        options: { A: "Motivating employees", B: "Ignoring workers", C: "Eliminating communication", D: "Reducing productivity" },
        answer: "A"
    },
    {
        q: "Controlling involves:",
        options: { A: "Monitoring performance", B: "Avoiding corrections", C: "Ignoring goals", D: "Increasing confusion" },
        answer: "A"
    },
    {
        q: "Mintzberg identified:",
        options: { A: "5 managerial roles", B: "8 managerial roles", C: "10 managerial roles", D: "15 managerial roles" },
        answer: "C"
    },
    {
        q: "Managerial roles are grouped around:",
        options: { A: "Marketing only", B: "Decision making only", C: "Interpersonal, informational, and decisional roles", D: "Accounting only" },
        answer: "C"
    },
    {
        q: "Figurehead is a type of:",
        options: { A: "Informational role", B: "Interpersonal role", C: "Decisional role", D: "Technical role" },
        answer: "B"
    },
    {
        q: "A figurehead performs:",
        options: { A: "Financial analysis", B: "Ceremonial and symbolic duties", C: "Technical repairs", D: "Market research" },
        answer: "B"
    },
    {
        q: "The leader role involves:",
        options: { A: "Motivating and guiding employees", B: "Avoiding employees", C: "Reducing communication", D: "Ignoring goals" },
        answer: "A"
    },
    {
        q: "Liaison role focuses on:",
        options: { A: "Building relationships", B: "Avoiding contact", C: "Increasing conflict", D: "Selling products only" },
        answer: "A"
    },
    {
        q: "Monitor is an:",
        options: { A: "Interpersonal role", B: "Informational role", C: "Technical skill", D: "Conceptual skill" },
        answer: "B"
    },
    {
        q: "Disseminator means:",
        options: { A: "Sharing important information", B: "Reducing communication", C: "Hiring employees", D: "Selling products" },
        answer: "A"
    },
    {
        q: "A spokesperson:",
        options: { A: "Repairs equipment", B: "Represents the organization to outsiders", C: "Avoids communication", D: "Manages machines only" },
        answer: "B"
    },
    {
        q: "Entrepreneur is a:",
        options: { A: "Decisional role", B: "Human skill", C: "Technical role", D: "Functional structure" },
        answer: "A"
    },
    {
        q: "Entrepreneur role involves:",
        options: { A: "Initiating change and innovation", B: "Avoiding risks", C: "Ignoring opportunities", D: "Monitoring attendance" },
        answer: "A"
    },
    {
        q: "Disturbance handler:",
        options: { A: "Creates conflict", B: "Resolves conflicts and crises", C: "Avoids communication", D: "Handles payroll" },
        answer: "B"
    },
    {
        q: "Resource allocator distributes:",
        options: { A: "Rumors", B: "Resources such as time and money", C: "Complaints only", D: "Legal documents" },
        answer: "B"
    },
    {
        q: "Negotiator role includes:",
        options: { A: "Making agreements", B: "Ignoring disputes", C: "Avoiding communication", D: "Selling machinery" },
        answer: "A"
    },
    {
        q: "Technical skills refer to:",
        options: { A: "Ability to work with people", B: "Knowledge in a specific field", C: "Strategic thinking only", D: "Public speaking only" },
        answer: "B"
    },
    {
        q: "Human skills are:",
        options: { A: "Financial abilities", B: "Ability to work well with others", C: "Technical expertise only", D: "Machine handling" },
        answer: "B"
    },
    {
        q: "Conceptual skills help managers:",
        options: { A: "See the organization as a whole", B: "Repair machines", C: "Prepare advertisements", D: "Avoid planning" },
        answer: "A"
    },
    {
        q: "Which skill is most important for top managers?",
        options: { A: "Technical skills", B: "Human skills", C: "Conceptual skills", D: "Driving skills" },
        answer: "C"
    },
    {
        q: "Customers are important because:",
        options: { A: "Organizations exist for them", B: "They manage employees", C: "They own all companies", D: "They avoid innovation" },
        answer: "A"
    },
    {
        q: "High-quality customer service is essential for:",
        options: { A: "Survival", B: "Reduced profits", C: "Employee absence", D: "Increased conflict" },
        answer: "A"
    },
    {
        q: "Innovation means:",
        options: { A: "Doing things differently", B: "Avoiding change", C: "Ignoring opportunities", D: "Reducing creativity" },
        answer: "A"
    },
    {
        q: "Managers should encourage employees to:",
        options: { A: "Avoid risks", B: "Ignore opportunities", C: "Act on opportunities for innovation", D: "Stop learning" },
        answer: "C"
    },
    {
        q: "An organization is:",
        options: { A: "A random group of people", B: "A deliberate arrangement of people", C: "A machine only", D: "A government law" },
        answer: "B"
    },
    {
        q: "Organizations exist to:",
        options: { A: "Waste resources", B: "Achieve specific goals", C: "Reduce productivity", D: "Avoid planning" },
        answer: "B"
    },
    {
        q: "Organizations have:",
        options: { A: "No structure", B: "Clear structure and responsibilities", C: "Only one employee", D: "No authority" },
        answer: "B"
    },
    {
        q: "Universality of management means:",
        options: { A: "Management is needed everywhere", B: "Only businesses need management", C: "Management is unnecessary", D: "Only governments need managers" },
        answer: "A"
    },
    {
        q: "Employees either:",
        options: { A: "Relax or resign", B: "Manage or are managed", C: "Travel or study", D: "Buy or sell" },
        answer: "B"
    },
    {
        q: "Management offers:",
        options: { A: "Only routine work", B: "Challenging and creative opportunities", C: "No rewards", D: "Limited responsibility" },
        answer: "B"
    },
    {
        q: "Successful managers often receive:",
        options: { A: "Punishments only", B: "Monetary rewards", C: "No benefits", D: "Reduced salaries" },
        answer: "B"
    },
    {
        q: "Which managerial level makes strategic decisions?",
        options: { A: "First-line managers", B: "Top managers", C: "Interns", D: "Clerks" },
        answer: "B"
    },
    {
        q: "Which management function involves setting goals?",
        options: { A: "Organizing", B: "Planning", C: "Controlling", D: "Leading" },
        answer: "B"
    },
    {
        q: "Organizing includes arranging:",
        options: { A: "Resources", B: "Sports events", C: "Customer complaints only", D: "Political meetings" },
        answer: "A"
    },
    {
        q: "Leading requires:",
        options: { A: "Communication", B: "Isolation", C: "Silence", D: "Confusion" },
        answer: "A"
    },
    {
        q: "Controlling compares performance with:",
        options: { A: "Random guesses", B: "Goals", C: "Customer demands only", D: "Competitors only" },
        answer: "B"
    },
    {
        q: "Figurehead role is mainly:",
        options: { A: "Symbolic", B: "Technical", C: "Financial", D: "Mechanical" },
        answer: "A"
    },
    {
        q: "Monitor role focuses on:",
        options: { A: "Collecting information", B: "Repairing equipment", C: "Selling products", D: "Avoiding communication" },
        answer: "A"
    },
    {
        q: "Disseminator role involves:",
        options: { A: "Sharing information", B: "Reducing teamwork", C: "Managing machines", D: "Ignoring staff" },
        answer: "A"
    },
    {
        q: "Spokesperson communicates with:",
        options: { A: "Outsiders", B: "Machines", C: "Only accountants", D: "Competitors secretly" },
        answer: "A"
    },
    {
        q: "Disturbance handler deals with:",
        options: { A: "Innovation", B: "Crises and conflicts", C: "Hiring only", D: "Product design" },
        answer: "B"
    },
    {
        q: "Negotiator participates in:",
        options: { A: "Ceremonies", B: "Agreements and negotiations", C: "Technical repairs", D: "Production only" },
        answer: "B"
    },
    {
        q: "Technical skills are especially important for:",
        options: { A: "First-line managers", B: "Customers", C: "Competitors", D: "Investors" },
        answer: "A"
    },
    {
        q: "Human skills are important for:",
        options: { A: "All managers", B: "Machines only", C: "Customers only", D: "Suppliers only" },
        answer: "A"
    },
    {
        q: "Conceptual skills involve understanding:",
        options: { A: "One department only", B: "The organization as a whole", C: "Customer complaints only", D: "Financial records only" },
        answer: "B"
    },
    {
        q: "Customer relationships are the responsibility of:",
        options: { A: "Top managers only", B: "All managers and employees", C: "Customers only", D: "Suppliers only" },
        answer: "B"
    },
    {
        q: "Innovation requires:",
        options: { A: "Risk-taking", B: "Avoiding change", C: "Ignoring opportunities", D: "Eliminating creativity" },
        answer: "A"
    },
    {
        q: "A clear structure defines:",
        options: { A: "Roles and responsibilities", B: "Customer choices", C: "Government laws", D: "Weather conditions" },
        answer: "A"
    },
    {
        q: "First-line managers directly supervise:",
        options: { A: "Non-managerial employees", B: "Top executives", C: "Government officials", D: "Customers" },
        answer: "A"
    },
    {
        q: "Middle managers connect:",
        options: { A: "Customers and suppliers", B: "Top managers and first-line managers", C: "Government and society", D: "Investors and clients" },
        answer: "B"
    },
    {
        q: "Efficiency focuses on:",
        options: { A: "Inputs and outputs", B: "Creativity only", C: "Advertising only", D: "Competition only" },
        answer: "A"
    },
    {
        q: "Effectiveness is concerned with:",
        options: { A: "Reaching goals", B: "Reducing costs only", C: "Machine repair", D: "Office decoration" },
        answer: "A"
    },
    {
        q: "Planning requires:",
        options: { A: "Goal definition", B: "Ignoring activities", C: "Avoiding teamwork", D: "Reducing communication" },
        answer: "A"
    },
    {
        q: "Leading helps employees:",
        options: { A: "Work effectively toward goals", B: "Avoid responsibilities", C: "Reduce effort", D: "Ignore customers" },
        answer: "A"
    },
    {
        q: "Controlling may require managers to:",
        options: { A: "Make corrections", B: "Ignore performance", C: "Avoid standards", D: "Reduce planning" },
        answer: "A"
    },
    {
        q: "Mintzberg's roles describe:",
        options: { A: "Employee salaries", B: "Managerial behaviors", C: "Customer satisfaction", D: "Market trends" },
        answer: "B"
    },
    {
        q: "Interpersonal roles focus on:",
        options: { A: "Relationships", B: "Machines", C: "Technology only", D: "Production costs" },
        answer: "A"
    },
    {
        q: "Informational roles focus on:",
        options: { A: "Information transfer", B: "Sports activities", C: "Building maintenance", D: "Entertainment" },
        answer: "A"
    },
    {
        q: "Decisional roles focus on:",
        options: { A: "Decision making", B: "Office decoration", C: "Recruitment only", D: "Communication barriers" },
        answer: "A"
    },
    {
        q: "Which role involves maintaining contacts?",
        options: { A: "Liaison", B: "Entrepreneur", C: "Negotiator", D: "Monitor" },
        answer: "A"
    },
    {
        q: "Entrepreneurial managers encourage:",
        options: { A: "Innovation", B: "Delay", C: "Conflict", D: "Isolation" },
        answer: "A"
    },
    {
        q: "Resource allocation includes distributing:",
        options: { A: "Staff and money", B: "Rumors", C: "News only", D: "Advertisements" },
        answer: "A"
    },
    {
        q: "Human skills are important because managers:",
        options: { A: "Work with people", B: "Work with machines only", C: "Avoid communication", D: "Ignore teamwork" },
        answer: "A"
    },
    {
        q: "Conceptual skills are more important at:",
        options: { A: "Higher management levels", B: "Lower management levels only", C: "Customer level", D: "Intern level" },
        answer: "A"
    },
    {
        q: "Organizations require:",
        options: { A: "Cooperation among people", B: "Isolation", C: "Competition only", D: "No structure" },
        answer: "A"
    },
    {
        q: "Good management is needed in:",
        options: { A: "All organizations", B: "Schools only", C: "Factories only", D: "Hospitals only" },
        answer: "A"
    },
    {
        q: "The reality of work is that employees:",
        options: { A: "Always work alone", B: "Either manage or are managed", C: "Avoid organizations", D: "Ignore goals" },
        answer: "B"
    },
    {
        q: "Being a manager can be:",
        options: { A: "Challenging and exciting", B: "Completely effortless", C: "Unimportant", D: "Meaningless" },
        answer: "A"
    },
    {
        q: "Top managers establish:",
        options: { A: "Organization-wide plans and goals", B: "Attendance records only", C: "Payroll systems only", D: "Office cleaning schedules" },
        answer: "A"
    },
    {
        q: "Efficiency without effectiveness means:",
        options: { A: "Goals may not be achieved", B: "Goals are always achieved", C: "Resources are unlimited", D: "Innovation increases" },
        answer: "A"
    },
    {
        q: "Effectiveness without efficiency may result in:",
        options: { A: "Waste of resources", B: "Increased productivity only", C: "Reduced costs", D: "Perfect performance" },
        answer: "A"
    },
    {
        q: "Organizing assigns:",
        options: { A: "Responsibilities", B: "Vacations only", C: "Entertainment programs", D: "Government duties" },
        answer: "A"
    },
    {
        q: "Leading is strongly related to:",
        options: { A: "Motivation", B: "Avoidance", C: "Isolation", D: "Delay" },
        answer: "A"
    },
    {
        q: "Managers monitor performance during:",
        options: { A: "Planning", B: "Controlling", C: "Leading", D: "Organizing" },
        answer: "B"
    },
    {
        q: "Mintzberg's spokesperson role requires:",
        options: { A: "Communication skills", B: "Technical repair skills", C: "Driving skills", D: "Artistic skills" },
        answer: "A"
    },
    {
        q: "Technical skills involve:",
        options: { A: "Specialized knowledge", B: "Emotional intelligence only", C: "Leadership only", D: "Public speaking only" },
        answer: "A"
    },
    {
        q: "Human skills improve:",
        options: { A: "Relationships with others", B: "Machine speed", C: "Financial investment", D: "Office construction" },
        answer: "A"
    },
    {
        q: "Conceptual skills help managers understand:",
        options: { A: "Interdependence of departments", B: "One task only", C: "Machine design only", D: "Customer behavior only" },
        answer: "A"
    },
    {
        q: "Innovation helps organizations:",
        options: { A: "Explore new territory", B: "Avoid growth", C: "Ignore opportunities", D: "Reduce creativity" },
        answer: "A"
    },
    {
        q: "Organizations need structure to define:",
        options: { A: "Authority", B: "Weather patterns", C: "Political systems", D: "Transportation routes" },
        answer: "A"
    },
    {
        q: "Management is important because:",
        options: { A: "It improves organizational performance", B: "It reduces goals", C: "It avoids teamwork", D: "It limits productivity" },
        answer: "A"
    },
    {
        q: "Managerial roles explain:",
        options: { A: "What managers do", B: "Customer preferences", C: "Product prices", D: "Government laws" },
        answer: "A"
    },
    {
        q: "A negotiator manager:",
        options: { A: "Makes agreements", B: "Repairs computers", C: "Designs buildings", D: "Avoids meetings" },
        answer: "A"
    },
    {
        q: "High customer service quality is necessary for:",
        options: { A: "Organizational survival", B: "Reduced profits", C: "Employee absence", D: "Increased waste" },
        answer: "A"
    },
    {
        q: "Organizations are formed because individuals:",
        options: { A: "Cannot achieve some goals alone", B: "Avoid teamwork", C: "Prefer isolation", D: "Ignore planning" },
        answer: "A"
    },
    {
        q: "Rewards of management include:",
        options: { A: "Meaningful work", B: "No responsibility", C: "Reduced authority", D: "Less communication" },
        answer: "A"
    },
    {
        q: "Challenges of management include:",
        options: { A: "Handling responsibilities", B: "Avoiding decisions", C: "Ignoring employees", D: "Eliminating teamwork" },
        answer: "A"
    },
    {
        q: "Management can best be defined as:",
        options: { A: "Coordinating and overseeing the work of others efficiently and effectively", B: "Working independently without goals", C: "Avoiding responsibilities", D: "Supervising machines only" },
        answer: "A"
    },
    {
        q: "A manager creates a yearly sales strategy and sets targets for employees. Which management function is being performed?",
        options: { A: "Organizing", B: "Planning", C: "Leading", D: "Controlling" },
        answer: "B"
    },
    {
        q: "A supervisor checks employee performance reports and compares them with company goals. Which management function is this?",
        options: { A: "Leading", B: "Organizing", C: "Controlling", D: "Staffing" },
        answer: "C"
    },
    {
        q: "A manager motivates employees to complete projects on time through guidance and communication. Which function is involved?",
        options: { A: "Planning", B: "Leading", C: "Organizing", D: "Budgeting" },
        answer: "B"
    },
    {
        q: "A department head assigns tasks and distributes resources among team members. Which management function is being used?",
        options: { A: "Organizing", B: "Leading", C: "Controlling", D: "Forecasting" },
        answer: "A"
    },
    {
        q: "A manager reduces production waste to achieve maximum output with minimum resources. Which concept is demonstrated?",
        options: { A: "Effectiveness", B: "Efficiency", C: "Leadership", D: "Innovation" },
        answer: "B"
    },
    {
        q: "A company successfully achieves its annual business targets. Which concept is reflected?",
        options: { A: "Efficiency", B: "Effectiveness", C: "Supervision", D: "Coordination" },
        answer: "B"
    },
    {
        q: "A supervisor directly manages factory workers on the production floor. What type of manager is this?",
        options: { A: "Top manager", B: "Middle manager", C: "First-line manager", D: "Executive manager" },
        answer: "C"
    },
    {
        q: "A CEO makes long-term decisions affecting the entire company. Which managerial level does the CEO belong to?",
        options: { A: "Operational management", B: "First-line management", C: "Middle management", D: "Top management" },
        answer: "D"
    },
    {
        q: "A regional manager supervises branch managers in different cities. What type of manager is this?",
        options: { A: "First-line manager", B: "Middle manager", C: "Operational employee", D: "Technical employee" },
        answer: "B"
    },
    {
        q: "A manager attends a company ceremony to represent the organization. Which managerial role is being performed?",
        options: { A: "Entrepreneur", B: "Figurehead", C: "Negotiator", D: "Monitor" },
        answer: "B"
    },
    {
        q: "A manager motivates employees and resolves team conflicts. Which managerial role is demonstrated?",
        options: { A: "Leader", B: "Liaison", C: "Disseminator", D: "Monitor" },
        answer: "A"
    },
    {
        q: "A manager builds relationships with suppliers and business partners. Which managerial role is this?",
        options: { A: "Figurehead", B: "Liaison", C: "Negotiator", D: "Entrepreneur" },
        answer: "B"
    },
    {
        q: "A manager gathers market information before making business decisions. Which informational role is being performed?",
        options: { A: "Disseminator", B: "Spokesperson", C: "Monitor", D: "Negotiator" },
        answer: "C"
    },
    {
        q: "A manager shares important policy updates with employees. Which informational role is demonstrated?",
        options: { A: "Disseminator", B: "Figurehead", C: "Entrepreneur", D: "Liaison" },
        answer: "A"
    },
    {
        q: "A company representative gives interviews to the media about organizational achievements. Which role is involved?",
        options: { A: "Monitor", B: "Spokesperson", C: "Disturbance handler", D: "Resource allocator" },
        answer: "B"
    },
    {
        q: "A manager introduces a new digital system to improve workplace productivity. Which decisional role is being performed?",
        options: { A: "Negotiator", B: "Entrepreneur", C: "Disseminator", D: "Liaison" },
        answer: "B"
    },
    {
        q: "A manager resolves a dispute between employees in the workplace. Which managerial role is demonstrated?",
        options: { A: "Resource allocator", B: "Disturbance handler", C: "Figurehead", D: "Spokesperson" },
        answer: "B"
    },
    {
        q: "A manager decides how company funds and staff should be distributed among departments. Which role is this?",
        options: { A: "Resource allocator", B: "Entrepreneur", C: "Monitor", D: "Liaison" },
        answer: "A"
    },
    {
        q: "A manager negotiates a contract with a supplier for lower prices. Which managerial role is being performed?",
        options: { A: "Figurehead", B: "Negotiator", C: "Disseminator", D: "Leader" },
        answer: "B"
    },
    {
        q: "A software manager uses programming expertise to solve technical issues. Which managerial skill is demonstrated?",
        options: { A: "Human skill", B: "Conceptual skill", C: "Technical skill", D: "Leadership skill" },
        answer: "C"
    },
    {
        q: "A manager effectively communicates and works well with employees from different backgrounds. Which skill is reflected?",
        options: { A: "Technical skill", B: "Human skill", C: "Conceptual skill", D: "Analytical skill" },
        answer: "B"
    },
    {
        q: "A top manager understands how all departments work together to achieve organizational goals. Which skill is being used?",
        options: { A: "Technical skill", B: "Human skill", C: "Conceptual skill", D: "Supervisory skill" },
        answer: "C"
    },
    {
        q: "A company focuses heavily on customer satisfaction to survive in a competitive market. Which concept is highlighted?",
        options: { A: "Customer service importance", B: "Cost reduction", C: "Monopoly power", D: "Technical management" },
        answer: "A"
    },
    {
        q: "A manager encourages employees to suggest creative ideas and take risks. Which managerial focus is being promoted?",
        options: { A: "Efficiency", B: "Innovation", C: "Controlling", D: "Supervision" },
        answer: "B"
    },
    {
        q: "A hospital has doctors, nurses, and administrators working together toward patient care goals. This describes:",
        options: { A: "Monopoly", B: "Organization", C: "Sole proprietorship", D: "Partnership" },
        answer: "B"
    },
    {
        q: "A manager spends too much money to achieve business goals successfully. Which statement is correct?",
        options: { A: "The manager is efficient but ineffective", B: "The manager is effective but inefficient", C: "The manager is both efficient and effective", D: "The manager lacks planning" },
        answer: "B"
    },
    {
        q: "An employee follows instructions from a supervisor and does not oversee others. What type of employee is this?",
        options: { A: "Top manager", B: "Middle manager", C: "Non-managerial employee", D: "First-line manager" },
        answer: "C"
    },
    {
        q: "A university dean supervises department heads and implements policies from the vice chancellor. Which managerial level applies?",
        options: { A: "First-line manager", B: "Middle manager", C: "Operational worker", D: "Technical manager" },
        answer: "B"
    },
    {
        q: "A manager checks whether production targets are being achieved and corrects mistakes immediately. Which management function is involved?",
        options: { A: "Planning", B: "Organizing", C: "Leading", D: "Controlling" },
        answer: "D"
    },
    {
        q: "A company creates departments with clear authority and responsibilities for employees. Which characteristic of an organization is reflected?",
        options: { A: "Informal communication", B: "Clear organizational structure", C: "Personal ownership", D: "Market competition" },
        answer: "B"
    },
    {
        q: "What is the commonly accepted definition of privacy?",
        options: { A: "Freedom to communicate publicly", B: "The right to be left alone", C: "Access to public records", D: "Freedom to share information" },
        answer: "B"
    },
    {
        q: "Information privacy is a combination of:",
        options: { A: "Hardware and software", B: "Communication and networking", C: "Communications privacy and data privacy", D: "Security and encryption" },
        answer: "C"
    },
    {
        q: "Which of the following is a key aspect of privacy?",
        options: { A: "Data mining", B: "Surveillance", C: "Freedom from interference", D: "Hacking" },
        answer: "C"
    },
    {
        q: "Freedom from surveillance means:",
        options: { A: "Freedom to use internet", B: "Freedom from being tracked or watched", C: "Freedom to share data", D: "Freedom to store files" },
        answer: "B"
    },
    {
        q: "Which technology has significantly changed privacy?",
        options: { A: "GPS devices", B: "Smartphones", C: "Databases", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Unauthorized use of personal information by employees is called:",
        options: { A: "Encryption", B: "Insider misuse", C: "Authentication", D: "Monitoring" },
        answer: "B"
    },
    {
        q: "Which of the following is a privacy threat?",
        options: { A: "Theft of information", B: "Strong passwords", C: "Encryption", D: "Backup systems" },
        answer: "A"
    },
    {
        q: "Unintentional leakage of information occurs because of:",
        options: { A: "Security software", B: "Negligence or carelessness", C: "Strong authentication", D: "Encryption" },
        answer: "B"
    },
    {
        q: "Privacy and security are often considered:",
        options: { A: "Opposites", B: "Synonyms", C: "Unrelated", D: "Independent" },
        answer: "B"
    },
    {
        q: "Which organization maintains large databases of personal information?",
        options: { A: "Government agencies", B: "Private companies", C: "Both A and B", D: "Schools only" },
        answer: "C"
    },
    {
        q: "GPS technology allows others to:",
        options: { A: "Encrypt data", B: "Track movements", C: "Store passwords", D: "Prevent hacking" },
        answer: "B"
    },
    {
        q: "What enables tracking of web activity?",
        options: { A: "Device fingerprinting", B: "Antivirus software", C: "Encryption", D: "Firewall" },
        answer: "A"
    },
    {
        q: "What is one risk of cloud storage?",
        options: { A: "Faster processing", B: "Privacy exposure", C: "Better graphics", D: "Reduced storage" },
        answer: "B"
    },
    {
        q: "Which of the following is used for surveillance?",
        options: { A: "Tiny cameras", B: "GPS devices", C: "Sensors", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Social networks can combine information to:",
        options: { A: "Reduce storage", B: "Create detailed personal profiles", C: "Improve gaming", D: "Increase hardware speed" },
        answer: "B"
    },
    {
        q: "Which is an example of stolen data?",
        options: { A: "Lost laptop", B: "Hacked database", C: "Bribed employee", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Criminals steal personal data mainly for:",
        options: { A: "Education", B: "Entertainment", C: "Misuse and fraud", D: "Gaming" },
        answer: "C"
    },
    {
        q: "Which device is commonly lost containing sensitive data?",
        options: { A: "Laptop", B: "Mouse", C: "Printer", D: "Speaker" },
        answer: "A"
    },
    {
        q: "What is re-identification?",
        options: { A: "Data deletion", B: "Identifying individuals from collected information", C: "Password reset", D: "File backup" },
        answer: "B"
    },
    {
        q: "Information on a public website is:",
        options: { A: "Completely secure", B: "Available only to employees", C: "Accessible to everyone", D: "Hidden automatically" },
        answer: "C"
    },
    {
        q: "Which is considered personal information?",
        options: { A: "Username", B: "Email address", C: "Phone number", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Device fingerprinting is mainly used for:",
        options: { A: "Gaming", B: "Tracking online activity", C: "Hardware repair", D: "Typing speed" },
        answer: "B"
    },
    {
        q: "Which privacy threat involves pretending to be someone else?",
        options: { A: "Bribery", B: "Hacking", C: "False pretenses", D: "Encryption" },
        answer: "C"
    },
    {
        q: "Miniaturization of processors has resulted in:",
        options: { A: "Larger cameras", B: "Tiny surveillance devices", C: "Less storage", D: "Slow processing" },
        answer: "B"
    },
    {
        q: "Which communication method creates permanent records?",
        options: { A: "Face-to-face talks", B: "Email and texting", C: "Hand signals", D: "Radio waves" },
        answer: "B"
    },
    {
        q: "The existence of stored data itself presents:",
        options: { A: "No issue", B: "A privacy risk", C: "Faster internet", D: "Better security" },
        answer: "B"
    },
    {
        q: "Privacy protection should ideally be:",
        options: { A: "Added later", B: "Built into systems", C: "Ignored", D: "Replaced with monitoring" },
        answer: "B"
    },
    {
        q: "Which of the following can expose sensitive information accidentally?",
        options: { A: "Wrong access status", B: "Strong passwords", C: "Encryption", D: "Authentication" },
        answer: "A"
    },
    {
        q: "Sophisticated surveillance tools are often used by:",
        options: { A: "Law enforcement agencies", B: "Farmers", C: "Drivers", D: "Teachers" },
        answer: "A"
    },
    {
        q: "Which type of data can unethical brokers sell?",
        options: { A: "Credit reports", B: "Medical records", C: "Cellphone records", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What is one benefit of understanding privacy risks?",
        options: { A: "Designing safer systems", B: "Increasing hacking", C: "Reducing storage", D: "Removing passwords" },
        answer: "A"
    },
    {
        q: "Which technology allows photo matching on social networks?",
        options: { A: "Artificial intelligence", B: "Data analysis tools", C: "Smartphone apps", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which term refers to collecting information secretly?",
        options: { A: "Encryption", B: "Invisible information gathering", C: "Authentication", D: "Compression" },
        answer: "B"
    },
    {
        q: "Businesses store large amounts of data because:",
        options: { A: "Storage is cheap and available", B: "Data is useless", C: "Computers are slow", D: "Monitoring is illegal" },
        answer: "A"
    },
    {
        q: "Software complexity can lead to:",
        options: { A: "Better privacy awareness", B: "Unknown data collection", C: "Faster typing", D: "Hardware damage" },
        answer: "B"
    },
    {
        q: "What is a major concern of online communication?",
        options: { A: "Messages can be copied and shared", B: "Messages disappear instantly", C: "No records exist", D: "No privacy risks exist" },
        answer: "A"
    },
    {
        q: "Which is NOT a privacy threat?",
        options: { A: "Encryption", B: "Theft of information", C: "Insider misuse", D: "Surveillance" },
        answer: "A"
    },
    {
        q: "The phrase \"right to be left alone\" relates to:",
        options: { A: "Security", B: "Privacy", C: "Networking", D: "Authentication" },
        answer: "B"
    },
    {
        q: "Which organization may accidentally leak sensitive data?",
        options: { A: "Businesses", B: "Government agencies", C: "Institutions", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What can GPS devices reveal?",
        options: { A: "Financial records", B: "User location", C: "Passwords", D: "Encryption keys" },
        answer: "B"
    },
    {
        q: "Which data is often stored in the cloud?",
        options: { A: "Photos", B: "Financial spreadsheets", C: "Documents", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which activity increases privacy risks?",
        options: { A: "Social networking", B: "Web browsing", C: "Online communication", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What is eavesdropping?",
        options: { A: "Data backup", B: "Secret listening or monitoring", C: "Compression", D: "Encryption" },
        answer: "B"
    },
    {
        q: "Which item can help identify a person?",
        options: { A: "Image", B: "Username", C: "Phone number", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which is a common cause of data loss?",
        options: { A: "Carelessness", B: "Strong encryption", C: "Antivirus software", D: "Authentication" },
        answer: "A"
    },
    {
        q: "What do privacy policies explain?",
        options: { A: "Device prices", B: "Data collection practices", C: "Hardware speed", D: "Typing methods" },
        answer: "B"
    },
    {
        q: "Which privacy issue involves tracking online activity?",
        options: { A: "Device fingerprinting", B: "Compression", C: "Networking", D: "Formatting" },
        answer: "A"
    },
    {
        q: "A collection of small information pieces can:",
        options: { A: "Reveal detailed personal profiles", B: "Improve internet speed", C: "Encrypt files", D: "Remove privacy risks" },
        answer: "A"
    },
    {
        q: "What can hackers target?",
        options: { A: "Computer systems", B: "Databases", C: "Personal records", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which privacy threat is intentional?",
        options: { A: "Theft of information", B: "Negligence", C: "Carelessness", D: "System failure" },
        answer: "A"
    },
    {
        q: "Which technology allows websites to identify devices uniquely?",
        options: { A: "Device fingerprinting", B: "Antivirus software", C: "Word processing", D: "Formatting" },
        answer: "A"
    },
    {
        q: "Information privacy mainly concerns:",
        options: { A: "Personal data protection", B: "Hardware repair", C: "Internet speed", D: "Computer graphics" },
        answer: "A"
    },
    {
        q: "Which of the following is an example of surveillance?",
        options: { A: "GPS tracking", B: "Watching public videos", C: "Monitoring online activity", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Why are cloud services considered a privacy risk?",
        options: { A: "Data is stored remotely", B: "They increase internet speed", C: "They reduce storage", D: "They remove passwords" },
        answer: "A"
    },
    {
        q: "Which organization may use sophisticated data analysis tools?",
        options: { A: "Law enforcement agencies", B: "Hospitals", C: "Banks", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What is one consequence of data theft?",
        options: { A: "Identity fraud", B: "Faster systems", C: "Better privacy", D: "Reduced storage" },
        answer: "A"
    },
    {
        q: "Which of the following is considered sensitive information?",
        options: { A: "Social Security number", B: "Credit card number", C: "Medical record", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which action can accidentally expose private information online?",
        options: { A: "Incorrect file permissions", B: "Encryption", C: "Firewall installation", D: "Password creation" },
        answer: "A"
    },
    {
        q: "Online records can remain accessible for:",
        options: { A: "A few seconds", B: "Several years", C: "One minute", D: "One hour" },
        answer: "B"
    },
    {
        q: "What is the purpose of privacy protections in computer systems?",
        options: { A: "To reduce risks", B: "To increase hacking", C: "To slow down systems", D: "To remove databases" },
        answer: "A"
    },
    {
        q: "Which of the following can collect user activity data?",
        options: { A: "Websites", B: "Search engines", C: "Social networks", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which term refers to personal information being gathered secretly?",
        options: { A: "Invisible information gathering", B: "Open communication", C: "Data formatting", D: "Public access" },
        answer: "A"
    },
    {
        q: "What does data privacy mainly protect?",
        options: { A: "Personal information", B: "Hardware devices", C: "Computer monitors", D: "Printers" },
        answer: "A"
    },
    {
        q: "Why is privacy important in normal life?",
        options: { A: "It protects personal freedom", B: "It increases surveillance", C: "It removes communication", D: "It weakens security" },
        answer: "A"
    },
    {
        q: "Which of the following can reveal a person's habits?",
        options: { A: "Search history", B: "Social media activity", C: "Online purchases", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What is a major concern with smartphones?",
        options: { A: "They contain location tracking features", B: "They reduce communication", C: "They remove internet access", D: "They block surveillance" },
        answer: "A"
    },
    {
        q: "Which privacy threat involves employees misusing information?",
        options: { A: "Insider abuse", B: "Encryption", C: "Compression", D: "Authentication" },
        answer: "A"
    },
    {
        q: "Which of the following is NOT a form of personal information?",
        options: { A: "Email address", B: "Username", C: "IP address", D: "Keyboard" },
        answer: "D"
    },
    {
        q: "Why do organizations save huge amounts of data?",
        options: { A: "Large storage space is available", B: "Data has no value", C: "Computers are smaller", D: "Privacy laws require it" },
        answer: "A"
    },
    {
        q: "Which risk arises from combining different databases?",
        options: { A: "Detailed profiling of individuals", B: "Faster internet", C: "Improved graphics", D: "Reduced communication" },
        answer: "A"
    },
    {
        q: "Which technology can determine a person's location?",
        options: { A: "GPS", B: "Firewall", C: "Printer", D: "Scanner" },
        answer: "A"
    },
    {
        q: "Which activity creates a permanent digital record?",
        options: { A: "Text messaging", B: "Email communication", C: "Social networking", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Why are public records easier to access today?",
        options: { A: "Digital databases", B: "Smaller computers", C: "Less internet usage", D: "Fewer records" },
        answer: "A"
    },
    {
        q: "Which privacy issue results from negligence?",
        options: { A: "Unintentional leakage", B: "Encryption", C: "Authentication", D: "Compression" },
        answer: "A"
    },
    {
        q: "Which device commonly stores sensitive data?",
        options: { A: "Thumb drive", B: "Speaker", C: "Keyboard", D: "Mouse" },
        answer: "A"
    },
    {
        q: "Which of the following is a surveillance tool?",
        options: { A: "Tiny camera", B: "GPS tracker", C: "Data analysis software", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What can criminals do with stolen personal information?",
        options: { A: "Commit fraud", B: "Access accounts", C: "Steal identities", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which term refers to watching or tracking individuals?",
        options: { A: "Surveillance", B: "Compression", C: "Encryption", D: "Authentication" },
        answer: "A"
    },
    {
        q: "Which of the following may collect data without user awareness?",
        options: { A: "Websites", B: "Apps", C: "Tracking software", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which statement about privacy risks is true?",
        options: { A: "Technology has reduced privacy concerns", B: "Modern systems create new privacy risks", C: "Privacy no longer matters", D: "Databases are always secure" },
        answer: "B"
    },
    {
        q: "What does a privacy policy usually describe?",
        options: { A: "Data collection and usage", B: "Hardware installation", C: "Gaming rules", D: "Printer settings" },
        answer: "A"
    },
    {
        q: "Which privacy issue involves unauthorized access to data?",
        options: { A: "Data vulnerability", B: "Encryption", C: "Formatting", D: "Compression" },
        answer: "A"
    },
    {
        q: "Which information can help identify a living individual?",
        options: { A: "Images", B: "Email addresses", C: "Phone numbers", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which of the following is a result of advanced technology?",
        options: { A: "Easier tracking of individuals", B: "Reduced communication", C: "Less data storage", D: "Fewer online records" },
        answer: "A"
    },
    {
        q: "What is the main concern about information stored online?",
        options: { A: "Others may access it", B: "It improves privacy", C: "It disappears quickly", D: "It cannot be copied" },
        answer: "A"
    },
    {
        q: "Which of the following can expose users to privacy risks?",
        options: { A: "Cloud computing", B: "Social networking", C: "GPS services", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which group may buy illegally obtained information?",
        options: { A: "Criminals", B: "Private investigators", C: "Lawyers", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which type of communication was less permanent in the past?",
        options: { A: "Face-to-face conversations", B: "Emails", C: "Text messages", D: "Social media posts" },
        answer: "A"
    },
    {
        q: "Which activity helps protect privacy?",
        options: { A: "Designing secure systems", B: "Sharing passwords", C: "Ignoring risks", D: "Posting sensitive data publicly" },
        answer: "A"
    },
    {
        q: "Which technology allows tracking of web browsers?",
        options: { A: "Device fingerprinting", B: "Antivirus software", C: "Compression", D: "Formatting" },
        answer: "A"
    },
    {
        q: "What is one effect of social networking services?",
        options: { A: "Detailed user profiling", B: "Reduced communication", C: "No data collection", D: "Elimination of surveillance" },
        answer: "A"
    },
    {
        q: "Why is data vulnerability dangerous?",
        options: { A: "Unauthorized users may access information", B: "It improves privacy", C: "It speeds up networks", D: "It reduces storage" },
        answer: "A"
    },
    {
        q: "Which of the following may contain personal information?",
        options: { A: "Medical records", B: "Credit reports", C: "Financial records", D: "All of the above" },
        answer: "D"
    },
    {
        q: "Which statement best describes modern privacy concerns?",
        options: { A: "Technology creates both benefits and risks", B: "Privacy risks no longer exist", C: "Data cannot be copied", D: "Surveillance is impossible" },
        answer: "A"
    },
    {
        q: "What can happen if sensitive files are public online?",
        options: { A: "Anyone can access them", B: "Files disappear automatically", C: "Privacy improves", D: "Hackers lose interest" },
        answer: "A"
    },
    {
        q: "Which field is concerned with protecting information about individuals?",
        options: { A: "Information privacy", B: "Graphic design", C: "Networking", D: "Accounting" },
        answer: "A"
    },
    {
        q: "Which of the following is a privacy protection measure?",
        options: { A: "Secure system design", B: "Public data sharing", C: "Weak passwords", D: "Ignoring policies" },
        answer: "A"
    },
    {
        q: "Which organization can collect detailed customer information?",
        options: { A: "Search service providers", B: "Social networks", C: "Email service providers", D: "All of the above" },
        answer: "D"
    },
    {
        q: "What is a common source of accidental data exposure?",
        options: { A: "Careless handling of files", B: "Strong encryption", C: "Secure passwords", D: "Firewalls" },
        answer: "A"
    },
    {
        q: "Which statement best defines privacy?",
        options: { A: "The right to be left alone", B: "The right to hack systems", C: "The right to track users", D: "The right to steal information" },
        answer: "A"
    },
    {
        q: "Ali copied copyrighted software from his friend without permission. Which ethical issue is involved?",
        options: { A: "Data backup", B: "Software piracy", C: "Authentication", D: "Compression" },
        answer: "B"
    },
    {
        q: "Sara received an email asking for her banking password and clicked the link provided. What type of attack is this?",
        options: { A: "Firewall attack", B: "Backup attack", C: "Phishing", D: "Encryption" },
        answer: "C"
    },
    {
        q: "An employee intentionally leaked confidential customer records to competitors. Which ethical issue occurred?",
        options: { A: "Budgeting", B: "Fair competition", C: "Confidentiality breach", D: "Cost accounting" },
        answer: "C"
    },
    {
        q: "A company monitors employees' emails without informing them. Which issue is most relevant?",
        options: { A: "Manufacturing", B: "Trading", C: "Tax accounting", D: "Privacy concern" },
        answer: "D"
    },
    {
        q: "Ahmed created a fake social media account using another person's name and pictures. What crime is this?",
        options: { A: "Ethical hacking", B: "Data backup", C: "Identity theft", D: "Auditing" },
        answer: "C"
    },
    {
        q: "A student used someone else's assignment and submitted it as his own work. What is this called?",
        options: { A: "Encryption", B: "Auditing", C: "Compression", D: "Plagiarism" },
        answer: "D"
    },
    {
        q: "A company collects customer data but sells it without permission. Which ethical principle is violated?",
        options: { A: "Confidentiality", B: "Productivity", C: "Competition", D: "Budgeting" },
        answer: "A"
    },
    {
        q: "A hacker sends millions of requests to a website, making it unavailable. Which attack is this?",
        options: { A: "Patch update", B: "DDoS attack", C: "Data recovery", D: "Compression" },
        answer: "B"
    },
    {
        q: "Bilal installs antivirus software regularly to protect company systems. Which principle is being followed?",
        options: { A: "Data theft", B: "Hacking", C: "Fraud", D: "Security responsibility" },
        answer: "D"
    },
    {
        q: "A programmer inserts malicious code that activates after resignation. What is this called?",
        options: { A: "Patch", B: "Firewall", C: "Logic bomb", D: "Worm" },
        answer: "C"
    },
    {
        q: "An organization uses employee fingerprints for attendance tracking. Which technology is involved?",
        options: { A: "Encryption", B: "Biometrics", C: "Compression", D: "Formatting" },
        answer: "B"
    },
    {
        q: "A bank employee accesses customer accounts without authorization. What type of threat is this?",
        options: { A: "Insider threat", B: "Ethical hacking", C: "Marketing", D: "Auditing" },
        answer: "A"
    },
    {
        q: "A company hides product defects from customers to increase sales. Which ethical principle is violated?",
        options: { A: "Integrity", B: "Confidentiality", C: "Honesty", D: "Productivity" },
        answer: "C"
    },
    {
        q: "A student downloads movies illegally from websites. What issue is involved?",
        options: { A: "Auditing", B: "Copyright violation", C: "Encryption", D: "Taxation" },
        answer: "B"
    },
    {
        q: "A social media app tracks users' locations continuously without clear consent. Which issue is involved?",
        options: { A: "Cost accounting", B: "Auditing", C: "Privacy violation", D: "Manufacturing" },
        answer: "C"
    },
    {
        q: "A hacker gains access to a system by trying every password combination. Which attack is this?",
        options: { A: "Smishing", B: "Vishing", C: "Brute force attack", D: "Patch attack" },
        answer: "C"
    },
    {
        q: "A company installs cameras in employee restrooms. Which right is violated?",
        options: { A: "Voting rights", B: "Property rights", C: "Privacy rights", D: "Tax rights" },
        answer: "C"
    },
    {
        q: "A user receives a text message asking for ATM details. What type of scam is this?",
        options: { A: "DDoS", B: "Smishing", C: "Phishing", D: "Vishing" },
        answer: "B"
    },
    {
        q: "An employee shares office software with friends outside the organization. Which issue is this?",
        options: { A: "Auditing", B: "Budgeting", C: "Encryption", D: "Software piracy" },
        answer: "D"
    },
    {
        q: "A manager manipulates financial records to show false profits. Which unethical activity is involved?",
        options: { A: "Integrity", B: "Fraud", C: "Confidentiality", D: "Fairness" },
        answer: "B"
    }
];
