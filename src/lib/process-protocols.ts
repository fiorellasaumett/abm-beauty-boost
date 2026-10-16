export type Touchpoint = { n: string; title: string; what: string; how: string[]; result: string[] };

export const CUSTOMER_SERVICE: Touchpoint[] = [
  {
    n: "01",
    title: "Contact reception",
    what: "The customer contacts MONTOC through WhatsApp Business.",
    how: [
      "Reply within a maximum of 5 minutes during business hours.",
      "Use the company's standard greeting.",
      "Introduce yourself by name.",
      "Ask for the customer's name and the reason for contacting the company.",
    ],
    result: [
      "The customer receives a quick and polite response.",
      "The initial information is recorded.",
      "The customer's need is correctly identified.",
    ],
  },
  {
    n: "02",
    title: "Identifying the customer's need",
    what: "The customer's inquiry, request or claim is identified.",
    how: [
      "Listen to or read the customer's message carefully.",
      "Do not interrupt or respond aggressively.",
      "Classify the case as inquiry, request or claim.",
      "Check the available information in the catalog or system.",
    ],
    result: [
      "The case is correctly classified.",
      "The advisor understands the customer's need.",
      "Incorrect information is avoided.",
    ],
  },
  {
    n: "03",
    title: "Providing a solution",
    what: "The inquiry is answered or a solution is proposed.",
    how: [
      "Explain the information using simple language.",
      "Provide accurate information about products, prices and availability.",
      "For a claim, show empathy and request the necessary information.",
      "Escalate to the appropriate department when the advisor cannot solve the case.",
      "Do not promise solutions that the company cannot provide.",
    ],
    result: [
      "The customer receives a clear and useful answer.",
      "The solution corresponds to the customer's need.",
      "Claims are handled formally and respectfully.",
    ],
  },
  {
    n: "04",
    title: "Closing and follow-up",
    what: "The solution is confirmed and the interaction is closed.",
    how: [
      "Ask if the customer needs any additional information.",
      "Confirm the agreements, orders or commitments.",
      "Record the result of the interaction.",
      "Say goodbye using a polite message.",
      "Follow up when the case is still pending.",
    ],
    result: [
      "The customer knows what to do next.",
      "The interaction is properly documented.",
      "Customer satisfaction is maintained.",
    ],
  },
];

export const SALES: Touchpoint[] = [
  {
    n: "01",
    title: "Customer contact and attraction",
    what: "Contact is established with a potential customer.",
    how: [
      "Reply to the message politely.",
      "Briefly introduce MONTOC Cosmetic Tools.",
      "Ask what type of product the customer is looking for.",
      "Avoid sending advertising before understanding the customer's needs.",
      "Use only images and prices authorized by the company.",
    ],
    result: [
      "The customer understands who MONTOC is.",
      "The customer's initial interest is identified.",
      "Communication is personalized and not invasive.",
    ],
  },
  {
    n: "02",
    title: "Identifying customer needs",
    what: "The customer's needs are analyzed in order to offer an appropriate product.",
    how: [
      "Ask whether the customer is a professional makeup artist or a regular consumer.",
      "Identify the type of tool the customer is looking for.",
      "Ask about quantity, budget and intended use.",
      "Recommend products according to the customer's real needs.",
      "Do not exaggerate product characteristics or promise impossible results.",
    ],
    result: [
      "The recommendation matches the customer's profile.",
      "The customer receives useful options.",
      "The possibility of a satisfactory purchase increases.",
    ],
  },
  {
    n: "03",
    title: "Presenting the offer",
    what: "Products that may interest the customer are presented.",
    how: [
      "Send the product name, photograph, price and main characteristics.",
      "Explain the benefits of each product.",
      "Inform the customer about availability and estimated delivery time.",
      "Clearly present current promotions.",
      "Compare options without criticizing other products.",
    ],
    result: [
      "The customer has enough information to make a decision.",
      "The offer is clear, updated and attractive.",
      "False or incomplete information is not provided.",
    ],
  },
  {
    n: "04",
    title: "Confirming the sale",
    what: "The customer decides to buy and the order details are recorded.",
    how: [
      "Confirm the product, quantity, price and total value.",
      "Verify the delivery information.",
      "Inform the customer about the authorized payment methods.",
      "Record the order in the established system or format.",
      "Repeat the information before finishing to avoid mistakes.",
    ],
    result: [
      "The order is correctly recorded.",
      "The customer knows the purchasing conditions.",
      "Errors involving products, quantities and addresses are reduced.",
    ],
  },
  {
    n: "05",
    title: "Follow-up and customer loyalty",
    what: "The result of the sale is verified and the relationship with the customer is maintained.",
    how: [
      "Confirm that the order was received.",
      "Ask whether the product arrived in good condition.",
      "Solve any questions after the purchase.",
      "Ask for an opinion or evaluation of the service.",
      "Share future updates only when they are relevant.",
    ],
    result: [
      "The relationship with the customer is strengthened.",
      "Opportunities for future purchases are identified.",
      "MONTOC receives information to improve its service.",
    ],
  },
];

