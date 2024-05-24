import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
 
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Mapping from './Component/Mapping';



const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});


const queryClient = new QueryClient();


function App() {
  return (

    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
<div>
<div className='flex w-full justify-end mr-4 px-6 my-8'>

<ConnectButton />
</div>

<h1 className='text-center text-black font-bold text-[25px]'>
  Counter Dapp
</h1>
<Counter />


<h1 className='text-center text-black font-bold text-[25px]'>
  Mapping Dapp
</h1>

<Mapping />

</div>   

</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
