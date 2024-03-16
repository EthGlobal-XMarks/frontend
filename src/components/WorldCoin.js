import { useAccount } from 'wagmi';
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';

export default function WorldCoin() {
    const { address, isConnected, isConnecting } = useAccount();
    console.log(address);

    const verifyProof = async (proof) => {
        console.log("Fooooo barrrrrrr")
        throw new Error("TODO: verify proof server route")
      };
      
      // TODO: Functionality after verifying
      const onSuccess = () => {
        console.log("Success")
      };

    return (
        address ?
            <div>
                <IDKitWidget
                    app_id="app_staging_fc7dff81ecf7d7c60de3a38907ef06ea"
                    action="identity"
                    false
                    verification_level={VerificationLevel.Device}
                    handleVerify={verifyProof}
                    onSuccess={onSuccess}>
                    {({ open }) => (
                        <button
                        onClick={open} style={{zIndex: 100, color: "black", backgroundColor: "white", padding: "9.5px 12px", borderRadius: 8, fontSize: 13}} >
                            Verify with <b>World ID</b>
                        </button>
                        )}
                </IDKitWidget>
            </div>
        : null
    );
}