import XMarksABI from './abi/XMarks.json'; 

const XMarksAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // Replace with testnet address

const useContract = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    const xMarksContract = new ethers.Contract(XMarksAddress, XMarksABI, signer);

    setContract(xMarksContract);
  }, []);

  return contract;
};

export function XMarksInteraction() {
  const xMarks = useContract();
  const [currentGameImage, setCurrentGameImage] = useState("");
  const [gameData, setGameData] = useState([]);
  const [isWinner, setIsWinner] = useState(false);



}



