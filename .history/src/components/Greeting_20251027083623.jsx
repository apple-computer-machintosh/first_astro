export default function Greeting({messages}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]
}