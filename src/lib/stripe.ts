import Stripe from "stripe";

const apiKey: string = process.env.STRIPE_SECRET_KEY || ''
export const stripe = new Stripe(apiKey,{
  apiVersion: "2022-11-15",
  appInfo: {
    name: 'Ignite Shop'
  }
});