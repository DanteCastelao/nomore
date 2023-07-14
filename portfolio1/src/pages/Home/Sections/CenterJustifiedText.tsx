

const CenterJustifiedText = ({ transition1 }: { transition1: boolean }) => {

  return (
    <div className='flex justify-center'>
        <svg width="962" height="431" viewBox="0 0 962 431" xmlns="http://www.w3.org/2000/svg">
          <path className={`transition-all duration-[600ms] ${transition1 ? 'fill-black' : 'fill-white'}`} d="M29.16 70.44C22.26 70.44 16.77 69.24 12.69 66.84C8.61 64.44 5.64 60.66 3.78 55.5C1.92 50.34 0.99 43.5 0.99 34.98C0.99 23.34 3.24 14.61 7.74 8.79C12.24 2.97 19.38 0.0599971 29.16 0.0599971C32.88 0.0599971 35.94 0.449997 38.34 1.23C40.74 1.95 43.02 3.14999 45.18 4.82999L43.65 12.93L41.85 13.74C40.35 12.12 38.61 10.95 36.63 10.23C34.65 9.51 32.16 9.15 29.16 9.15C22.8 9.15 18.15 11.19 15.21 15.27C12.33 19.29 10.89 25.86 10.89 34.98C10.89 41.64 11.46 46.89 12.6 50.73C13.74 54.51 15.63 57.24 18.27 58.92C20.91 60.54 24.54 61.35 29.16 61.35C32.7 61.35 35.61 60.99 37.89 60.27C40.17 59.49 42.27 58.23 44.19 56.49L45.81 57.21L43.83 64.95C39.51 68.61 34.62 70.44 29.16 70.44ZM106.165 69H92.4848L84.1148 55.5L79.6148 49.2H66.8348V55.5L67.7348 69H56.9348L57.5648 55.5V14.55L56.9348 1.49999H80.6048C87.1448 1.49999 92.3348 3.56999 96.1748 7.71C100.075 11.79 102.025 17.64 102.025 25.26C102.025 30.66 100.885 35.28 98.6048 39.12C96.3248 42.9 93.2348 45.66 89.3348 47.4L95.1848 55.5L106.165 69ZM66.8348 40.38H77.7248C82.7648 40.38 86.4548 39.18 88.7948 36.78C91.1348 34.38 92.3048 30.54 92.3048 25.26C92.3048 20.04 91.1648 16.26 88.8848 13.92C86.6048 11.52 82.9448 10.32 77.9048 10.32H66.8348V40.38ZM155.509 60.18L154.159 69H115.909L116.539 55.5V14.55L115.909 1.49999H154.789L153.439 10.32H125.809V29.85H150.649L149.209 38.67H125.809V60.18H155.509ZM216.02 69H204.68L201.53 55.5L200.63 52.35L176.69 52.53L175.79 55.5L172.73 69H162.47L167.06 55.5L179.48 15L182.9 1.49999H195.5L198.74 15L211.34 55.5L216.02 69ZM198.02 43.53L188.66 11.58L179.3 43.71L198.02 43.53ZM265.938 10.86L264.948 11.13L256.308 9.96H247.308V55.5L247.938 69H237.498L238.128 55.5V9.96H229.128L220.488 11.13L219.498 10.86L220.938 1.49999H264.498L265.938 10.86ZM276.325 55.5V14.55L275.695 1.49999H286.135L285.595 14.55V55.5L286.135 69H275.695L276.325 55.5ZM346.723 55.86L347.263 69.09H338.353V69H331.693L310.183 9.24V55.5L310.723 69H301.183L301.813 55.5V14.55L301.183 1.49999H316.933L338.353 60.99V14.91L337.723 1.59H347.263L346.723 14.91V55.86ZM360.287 34.98C360.287 22.92 362.477 14.1 366.857 8.52C371.237 2.88 378.197 0.0599971 387.737 0.0599971C390.857 0.0599971 394.037 0.599997 397.277 1.68C400.577 2.7 403.607 4.23 406.367 6.27L404.837 14.73L403.037 15.54C401.477 13.74 399.227 12.24 396.287 11.04C393.347 9.78 390.497 9.15 387.737 9.15C381.497 9.15 376.967 11.19 374.147 15.27C371.327 19.29 369.917 25.86 369.917 34.98C369.917 41.34 370.457 46.44 371.537 50.28C372.617 54.12 374.297 56.94 376.577 58.74C378.917 60.48 381.977 61.35 385.757 61.35C390.677 61.35 394.337 59.67 396.737 56.31C399.197 52.95 400.427 47.82 400.427 40.92H383.597V32.1H409.157V69H404.117L402.317 60.9C400.757 63.84 398.387 66.18 395.207 67.92C392.027 69.6 388.577 70.44 384.857 70.44C376.637 70.44 370.487 67.56 366.407 61.8C362.327 55.98 360.287 47.04 360.287 34.98ZM746.429 69.99C741.989 69.99 737.999 69.36 734.459 68.1C730.979 66.78 727.679 64.65 724.559 61.71L723.209 52.62L724.469 52.26C731.249 58.02 738.149 60.9 745.169 60.9C749.609 60.9 753.059 60.06 755.519 58.38C757.979 56.7 759.209 54.42 759.209 51.54C759.209 49.56 758.759 47.94 757.859 46.68C757.019 45.42 755.459 44.28 753.179 43.26C750.899 42.24 747.509 41.16 743.009 40.02C736.109 38.16 731.189 35.73 728.249 32.73C725.369 29.73 723.929 25.56 723.929 20.22C723.929 14.16 725.849 9.39 729.689 5.91C733.589 2.37 738.959 0.599995 745.799 0.599995C749.879 0.599995 753.779 1.23 757.499 2.49C761.219 3.69 764.249 5.37 766.589 7.53L765.239 16.35L763.889 16.71C762.089 14.67 759.599 12.99 756.419 11.67C753.299 10.35 750.149 9.69 746.969 9.69C742.589 9.69 739.259 10.5 736.979 12.12C734.759 13.74 733.649 16.11 733.649 19.23C733.649 21.39 734.099 23.16 734.999 24.54C735.899 25.92 737.399 27.12 739.499 28.14C741.659 29.16 744.719 30.18 748.679 31.2C753.779 32.52 757.769 34.02 760.649 35.7C763.589 37.32 765.689 39.3 766.949 41.64C768.269 43.98 768.929 46.89 768.929 50.37C768.929 56.55 766.889 61.38 762.809 64.86C758.789 68.28 753.329 69.99 746.429 69.99ZM781.823 55.5V14.55L781.193 1.49999H791.633L791.093 14.55V55.5L791.633 69H781.193L781.823 55.5ZM852.221 55.86L852.761 69.09H843.851V69H837.191L815.681 9.24V55.5L816.221 69H806.681L807.311 55.5V14.55L806.681 1.49999H822.431L843.851 60.99V14.91L843.221 1.59H852.761L852.221 14.91V55.86ZM893.955 70.44C887.055 70.44 881.565 69.24 877.485 66.84C873.405 64.44 870.435 60.66 868.575 55.5C866.715 50.34 865.785 43.5 865.785 34.98C865.785 23.34 868.035 14.61 872.535 8.79C877.035 2.97 884.175 0.0599971 893.955 0.0599971C897.675 0.0599971 900.735 0.449997 903.135 1.23C905.535 1.95 907.815 3.14999 909.975 4.82999L908.445 12.93L906.645 13.74C905.145 12.12 903.405 10.95 901.425 10.23C899.445 9.51 896.955 9.15 893.955 9.15C887.595 9.15 882.945 11.19 880.005 15.27C877.125 19.29 875.685 25.86 875.685 34.98C875.685 41.64 876.255 46.89 877.395 50.73C878.535 54.51 880.425 57.24 883.065 58.92C885.705 60.54 889.335 61.35 893.955 61.35C897.495 61.35 900.405 60.99 902.685 60.27C904.965 59.49 907.065 58.23 908.985 56.49L910.605 57.21L908.625 64.95C904.305 68.61 899.415 70.44 893.955 70.44ZM961.33 60.18L959.98 69H921.73L922.36 55.5V14.55L921.73 1.49999H960.61L959.26 10.32H931.63V29.85H956.47L955.03 38.67H931.63V60.18H961.33ZM42.75 147.03L40.68 154.95C39.96 157.65 36.03 159 28.89 159H0.54V153.42L17.01 132C21.93 125.58 25.29 120.66 27.09 117.24C28.89 113.76 29.79 110.79 29.79 108.33C29.79 105.51 28.86 103.35 27 101.85C25.2 100.35 22.53 99.6 18.99 99.6C15.45 99.6 12.27 100.35 9.45 101.85C6.63 103.35 4.32 105.48 2.52 108.24L1.53 108.06L2.79 97.8C5.13 95.52 7.77 93.81 10.71 92.67C13.71 91.47 16.86 90.87 20.16 90.87C26.1 90.87 30.75 92.37 34.11 95.37C37.53 98.37 39.24 102.57 39.24 107.97C39.24 110.37 38.88 112.59 38.16 114.63C37.5 116.61 36.21 119.1 34.29 122.1C32.43 125.1 29.4 129.45 25.2 135.15L13.86 150.54H31.5C33.3 150.54 35.13 150.21 36.99 149.55C38.91 148.83 40.56 147.87 41.94 146.67L42.75 147.03ZM73.4055 160.44C65.8455 160.44 60.2655 157.65 56.6655 152.07C53.1255 146.43 51.3555 137.31 51.3555 124.71C51.3555 112.59 53.1255 103.8 56.6655 98.34C60.2655 92.82 65.8455 90.06 73.4055 90.06C80.9655 90.06 86.5155 92.82 90.0555 98.34C93.6555 103.8 95.4555 112.59 95.4555 124.71C95.4555 137.31 93.6555 146.43 90.0555 152.07C86.5155 157.65 80.9655 160.44 73.4055 160.44ZM73.4055 151.62C76.5255 151.62 78.9855 150.81 80.7855 149.19C82.5855 147.57 83.9055 144.87 84.7455 141.09C85.6455 137.25 86.0955 131.97 86.0955 125.25C86.0955 118.53 85.6455 113.28 84.7455 109.5C83.9055 105.66 82.5855 102.93 80.7855 101.31C78.9855 99.69 76.5255 98.88 73.4055 98.88C70.2855 98.88 67.8255 99.69 66.0255 101.31C64.2255 102.93 62.8755 105.66 61.9755 109.5C61.1355 113.28 60.7155 118.53 60.7155 125.25C60.7155 131.97 61.1355 137.25 61.9755 141.09C62.8755 144.87 64.2255 147.57 66.0255 149.19C67.8255 150.81 70.2855 151.62 73.4055 151.62ZM105.825 127.05H139.395V135.6H105.825V127.05ZM191.285 147.03L189.215 154.95C188.495 157.65 184.565 159 177.425 159H149.075V153.42L165.545 132C170.465 125.58 173.825 120.66 175.625 117.24C177.425 113.76 178.325 110.79 178.325 108.33C178.325 105.51 177.395 103.35 175.535 101.85C173.735 100.35 171.065 99.6 167.525 99.6C163.985 99.6 160.805 100.35 157.985 101.85C155.165 103.35 152.855 105.48 151.055 108.24L150.065 108.06L151.325 97.8C153.665 95.52 156.305 93.81 159.245 92.67C162.245 91.47 165.395 90.87 168.695 90.87C174.635 90.87 179.285 92.37 182.645 95.37C186.065 98.37 187.775 102.57 187.775 107.97C187.775 110.37 187.415 112.59 186.695 114.63C186.035 116.61 184.745 119.1 182.825 122.1C180.965 125.1 177.935 129.45 173.735 135.15L162.395 150.54H180.035C181.835 150.54 183.665 150.21 185.525 149.55C187.445 148.83 189.095 147.87 190.475 146.67L191.285 147.03ZM221.941 160.44C214.381 160.44 208.801 157.65 205.201 152.07C201.661 146.43 199.891 137.31 199.891 124.71C199.891 112.59 201.661 103.8 205.201 98.34C208.801 92.82 214.381 90.06 221.941 90.06C229.501 90.06 235.051 92.82 238.591 98.34C242.191 103.8 243.991 112.59 243.991 124.71C243.991 137.31 242.191 146.43 238.591 152.07C235.051 157.65 229.501 160.44 221.941 160.44ZM221.941 151.62C225.061 151.62 227.521 150.81 229.321 149.19C231.121 147.57 232.441 144.87 233.281 141.09C234.181 137.25 234.631 131.97 234.631 125.25C234.631 118.53 234.181 113.28 233.281 109.5C232.441 105.66 231.121 102.93 229.321 101.31C227.521 99.69 225.061 98.88 221.941 98.88C218.821 98.88 216.361 99.69 214.561 101.31C212.761 102.93 211.411 105.66 210.511 109.5C209.671 113.28 209.251 118.53 209.251 125.25C209.251 131.97 209.671 137.25 210.511 141.09C211.411 144.87 212.761 147.57 214.561 149.19C216.361 150.81 218.821 151.62 221.941 151.62ZM263 159.45C260.84 159.45 259.01 158.85 257.51 157.65C256.07 156.45 255.35 154.92 255.35 153.06C255.35 151.2 256.07 149.64 257.51 148.38C259.01 147.12 260.84 146.49 263 146.49C265.16 146.49 266.96 147.12 268.4 148.38C269.9 149.64 270.65 151.2 270.65 153.06C270.65 154.92 269.9 156.45 268.4 157.65C266.96 158.85 265.16 159.45 263 159.45ZM477.086 91.5L476.456 104.55V136.68C476.456 152.52 469.046 160.44 454.226 160.44C446.786 160.44 441.206 158.46 437.486 154.5C433.826 150.48 431.996 144.54 431.996 136.68V104.55L431.456 91.5H441.986L441.356 104.55V136.68C441.356 141.66 442.406 145.35 444.506 147.75C446.606 150.15 449.846 151.35 454.226 151.35C458.606 151.35 461.846 150.15 463.946 147.75C466.046 145.35 467.096 141.66 467.096 136.68V104.55L466.556 91.5H477.086ZM540.299 159H527.789L520.319 145.5L511.859 131.64L503.579 145.5L496.649 159H484.499L493.679 145.5L506.279 124.62L494.399 104.55L485.669 91.5H497.909L504.659 104.55L512.309 117.33L519.689 104.55L526.349 91.5H538.049L529.409 104.55L517.979 124.35L530.849 145.5L540.299 159ZM694.513 127.05H728.083V135.6H694.513V127.05ZM933.499 91.5L932.869 104.55V136.68C932.869 152.52 925.459 160.44 910.639 160.44C903.199 160.44 897.619 158.46 893.899 154.5C890.239 150.48 888.409 144.54 888.409 136.68V104.55L887.869 91.5H898.399L897.769 104.55V136.68C897.769 141.66 898.819 145.35 900.919 147.75C903.019 150.15 906.259 151.35 910.639 151.35C915.019 151.35 918.259 150.15 920.359 147.75C922.459 145.35 923.509 141.66 923.509 136.68V104.55L922.969 91.5H933.499ZM948.112 145.5V104.55L947.482 91.5H957.922L957.382 104.55V145.5L957.922 159H947.482L948.112 145.5ZM24.21 181.5C32.97 181.5 39.33 184.2 43.29 189.6C47.31 194.94 49.32 203.4 49.32 214.98C49.32 226.56 47.28 235.14 43.2 240.72C39.18 246.24 32.85 249 24.21 249H2.97L3.6 235.5V194.55L2.97 181.5H24.21ZM24.21 240.18C27.87 240.18 30.81 239.34 33.03 237.66C35.25 235.92 36.87 233.22 37.89 229.56C38.91 225.84 39.42 220.98 39.42 214.98C39.42 208.8 38.91 203.94 37.89 200.4C36.87 196.8 35.25 194.22 33.03 192.66C30.87 191.1 27.93 190.32 24.21 190.32H12.96V240.18H24.21ZM101.896 240.18L100.546 249H62.2962L62.9262 235.5V194.55L62.2962 181.5H101.176L99.8262 190.32H72.1962V209.85H97.0362L95.5962 218.67H72.1962V240.18H101.896ZM134.056 249.99C129.616 249.99 125.626 249.36 122.086 248.1C118.606 246.78 115.306 244.65 112.186 241.71L110.836 232.62L112.096 232.26C118.876 238.02 125.776 240.9 132.796 240.9C137.236 240.9 140.686 240.06 143.146 238.38C145.606 236.7 146.836 234.42 146.836 231.54C146.836 229.56 146.386 227.94 145.486 226.68C144.646 225.42 143.086 224.28 140.806 223.26C138.526 222.24 135.136 221.16 130.636 220.02C123.736 218.16 118.816 215.73 115.876 212.73C112.996 209.73 111.556 205.56 111.556 200.22C111.556 194.16 113.476 189.39 117.316 185.91C121.216 182.37 126.586 180.6 133.426 180.6C137.506 180.6 141.406 181.23 145.126 182.49C148.846 183.69 151.876 185.37 154.216 187.53L152.866 196.35L151.516 196.71C149.716 194.67 147.226 192.99 144.046 191.67C140.926 190.35 137.776 189.69 134.596 189.69C130.216 189.69 126.886 190.5 124.606 192.12C122.386 193.74 121.276 196.11 121.276 199.23C121.276 201.39 121.726 203.16 122.626 204.54C123.526 205.92 125.026 207.12 127.126 208.14C129.286 209.16 132.346 210.18 136.306 211.2C141.406 212.52 145.396 214.02 148.276 215.7C151.216 217.32 153.316 219.3 154.576 221.64C155.896 223.98 156.556 226.89 156.556 230.37C156.556 236.55 154.516 241.38 150.436 244.86C146.416 248.28 140.956 249.99 134.056 249.99ZM169.45 235.5V194.55L168.82 181.5H179.26L178.72 194.55V235.5L179.26 249H168.82L169.45 235.5ZM192.328 214.98C192.328 202.92 194.518 194.1 198.898 188.52C203.278 182.88 210.238 180.06 219.778 180.06C222.898 180.06 226.078 180.6 229.318 181.68C232.618 182.7 235.648 184.23 238.408 186.27L236.878 194.73L235.078 195.54C233.518 193.74 231.268 192.24 228.328 191.04C225.388 189.78 222.538 189.15 219.778 189.15C213.538 189.15 209.008 191.19 206.188 195.27C203.368 199.29 201.958 205.86 201.958 214.98C201.958 221.34 202.498 226.44 203.578 230.28C204.658 234.12 206.338 236.94 208.618 238.74C210.958 240.48 214.018 241.35 217.798 241.35C222.718 241.35 226.378 239.67 228.778 236.31C231.238 232.95 232.468 227.82 232.468 220.92H215.638V212.1H241.198V249H236.158L234.358 240.9C232.798 243.84 230.428 246.18 227.248 247.92C224.068 249.6 220.618 250.44 216.898 250.44C208.678 250.44 202.528 247.56 198.448 241.8C194.368 235.98 192.328 227.04 192.328 214.98ZM300.317 235.86L300.857 249.09H291.947V249H285.287L263.777 189.24V235.5L264.317 249H254.777L255.407 235.5V194.55L254.777 181.5H270.527L291.947 240.99V194.91L291.317 181.59H300.857L300.317 194.91V235.86ZM355.461 240.18L354.111 249H315.861L316.491 235.5V194.55L315.861 181.5H354.741L353.391 190.32H325.761V209.85H350.601L349.161 218.67H325.761V240.18H355.461ZM416.331 249H402.651L394.281 235.5L389.781 229.2H377.001V235.5L377.901 249H367.101L367.731 235.5V194.55L367.101 181.5H390.771C397.311 181.5 402.501 183.57 406.341 187.71C410.241 191.79 412.191 197.64 412.191 205.26C412.191 210.66 411.051 215.28 408.771 219.12C406.491 222.9 403.401 225.66 399.501 227.4L405.351 235.5L416.331 249ZM377.001 220.38H387.891C392.931 220.38 396.621 219.18 398.961 216.78C401.301 214.38 402.471 210.54 402.471 205.26C402.471 200.04 401.331 196.26 399.051 193.92C396.771 191.52 393.111 190.32 388.071 190.32H377.001V220.38ZM431.925 249.45C429.765 249.45 427.935 248.85 426.435 247.65C424.995 246.45 424.275 244.92 424.275 243.06C424.275 241.2 424.995 239.64 426.435 238.38C427.935 237.12 429.765 236.49 431.925 236.49C434.085 236.49 435.885 237.12 437.325 238.38C438.825 239.64 439.575 241.2 439.575 243.06C439.575 244.92 438.825 246.45 437.325 247.65C435.885 248.85 434.085 249.45 431.925 249.45ZM614.52 190.32V209.85H639.27L637.83 218.67H614.52V235.5L615.06 249H604.62L605.25 235.5V194.55L604.62 181.5H643.5L642.15 190.32H614.52ZM698.754 249H687.414L684.264 235.5L683.364 232.35L659.424 232.53L658.524 235.5L655.464 249H645.204L649.794 235.5L662.214 195L665.634 181.5H678.234L681.474 195L694.074 235.5L698.754 249ZM680.754 223.53L671.394 191.58L662.034 223.71L680.754 223.53ZM729.554 249.99C725.114 249.99 721.124 249.36 717.584 248.1C714.104 246.78 710.804 244.65 707.684 241.71L706.334 232.62L707.594 232.26C714.374 238.02 721.274 240.9 728.294 240.9C732.734 240.9 736.184 240.06 738.644 238.38C741.104 236.7 742.334 234.42 742.334 231.54C742.334 229.56 741.884 227.94 740.984 226.68C740.144 225.42 738.584 224.28 736.304 223.26C734.024 222.24 730.634 221.16 726.134 220.02C719.234 218.16 714.314 215.73 711.374 212.73C708.494 209.73 707.054 205.56 707.054 200.22C707.054 194.16 708.974 189.39 712.814 185.91C716.714 182.37 722.084 180.6 728.924 180.6C733.004 180.6 736.904 181.23 740.624 182.49C744.344 183.69 747.374 185.37 749.714 187.53L748.364 196.35L747.014 196.71C745.214 194.67 742.724 192.99 739.544 191.67C736.424 190.35 733.274 189.69 730.094 189.69C725.714 189.69 722.384 190.5 720.104 192.12C717.884 193.74 716.774 196.11 716.774 199.23C716.774 201.39 717.224 203.16 718.124 204.54C719.024 205.92 720.524 207.12 722.624 208.14C724.784 209.16 727.844 210.18 731.804 211.2C736.904 212.52 740.894 214.02 743.774 215.7C746.714 217.32 748.814 219.3 750.074 221.64C751.394 223.98 752.054 226.89 752.054 230.37C752.054 236.55 750.014 241.38 745.934 244.86C741.914 248.28 736.454 249.99 729.554 249.99ZM809.228 235.41L809.768 248.91H799.328L799.958 235.41V218.67H774.218V235.5L774.758 249H764.318L764.948 235.5V194.55L764.318 181.5H774.758L774.218 194.55V209.85H799.958V194.46L799.328 181.41H809.768L809.228 194.46V235.41ZM825.416 235.5V194.55L824.786 181.5H835.226L834.686 194.55V235.5L835.226 249H824.786L825.416 235.5ZM873.675 250.44C865.335 250.44 859.005 247.47 854.685 241.53C850.425 235.53 848.295 226.68 848.295 214.98C848.295 203.4 850.425 194.7 854.685 188.88C859.005 183 865.335 180.06 873.675 180.06C881.955 180.06 888.255 183 892.575 188.88C896.895 194.7 899.055 203.4 899.055 214.98C899.055 226.68 896.895 235.53 892.575 241.53C888.255 247.47 881.955 250.44 873.675 250.44ZM873.675 241.35C877.335 241.35 880.305 240.48 882.585 238.74C884.865 237 886.545 234.21 887.625 230.37C888.765 226.53 889.335 221.4 889.335 214.98C889.335 205.74 888.075 199.14 885.555 195.18C883.095 191.16 879.135 189.15 873.675 189.15C870.015 189.15 867.015 190.02 864.675 191.76C862.395 193.44 860.715 196.17 859.635 199.95C858.555 203.73 858.015 208.74 858.015 214.98C858.015 221.4 858.555 226.53 859.635 230.37C860.715 234.21 862.395 237 864.675 238.74C866.955 240.48 869.955 241.35 873.675 241.35ZM957.426 235.86L957.966 249.09H949.056V249H942.396L920.886 189.24V235.5L921.426 249H911.886L912.516 235.5V194.55L911.886 181.5H927.636L949.056 240.99V194.91L948.426 181.59H957.966L957.426 194.91V235.86ZM29.16 340.44C22.26 340.44 16.77 339.24 12.69 336.84C8.61 334.44 5.64 330.66 3.78 325.5C1.92 320.34 0.99 313.5 0.99 304.98C0.99 293.34 3.24 284.61 7.74 278.79C12.24 272.97 19.38 270.06 29.16 270.06C32.88 270.06 35.94 270.45 38.34 271.23C40.74 271.95 43.02 273.15 45.18 274.83L43.65 282.93L41.85 283.74C40.35 282.12 38.61 280.95 36.63 280.23C34.65 279.51 32.16 279.15 29.16 279.15C22.8 279.15 18.15 281.19 15.21 285.27C12.33 289.29 10.89 295.86 10.89 304.98C10.89 311.64 11.46 316.89 12.6 320.73C13.74 324.51 15.63 327.24 18.27 328.92C20.91 330.54 24.54 331.35 29.16 331.35C32.7 331.35 35.61 330.99 37.89 330.27C40.17 329.49 42.27 328.23 44.19 326.49L45.81 327.21L43.83 334.95C39.51 338.61 34.62 340.44 29.16 340.44ZM80.3348 340.44C71.9948 340.44 65.6648 337.47 61.3448 331.53C57.0848 325.53 54.9548 316.68 54.9548 304.98C54.9548 293.4 57.0848 284.7 61.3448 278.88C65.6648 273 71.9948 270.06 80.3348 270.06C88.6148 270.06 94.9148 273 99.2348 278.88C103.555 284.7 105.715 293.4 105.715 304.98C105.715 316.68 103.555 325.53 99.2348 331.53C94.9148 337.47 88.6148 340.44 80.3348 340.44ZM80.3348 331.35C83.9948 331.35 86.9648 330.48 89.2448 328.74C91.5248 327 93.2048 324.21 94.2848 320.37C95.4248 316.53 95.9948 311.4 95.9948 304.98C95.9948 295.74 94.7348 289.14 92.2148 285.18C89.7548 281.16 85.7948 279.15 80.3348 279.15C76.6748 279.15 73.6748 280.02 71.3348 281.76C69.0548 283.44 67.3748 286.17 66.2948 289.95C65.2148 293.73 64.6748 298.74 64.6748 304.98C64.6748 311.4 65.2148 316.53 66.2948 320.37C67.3748 324.21 69.0548 327 71.3348 328.74C73.6148 330.48 76.6148 331.35 80.3348 331.35ZM158.146 330.18L156.796 339H118.546L119.176 325.5V284.55L118.546 271.5H128.986L128.446 284.55V325.5L128.626 330.18H158.146ZM206.838 330.18L205.488 339H167.238L167.868 325.5V284.55L167.238 271.5H177.678L177.138 284.55V325.5L177.318 330.18H206.838ZM255.529 330.18L254.179 339H215.929L216.559 325.5V284.55L215.929 271.5H254.809L253.459 280.32H225.829V299.85H250.669L249.229 308.67H225.829V330.18H255.529ZM264.486 304.98C264.486 292.92 266.676 284.1 271.056 278.52C275.436 272.88 282.396 270.06 291.936 270.06C295.056 270.06 298.236 270.6 301.476 271.68C304.776 272.7 307.806 274.23 310.566 276.27L309.036 284.73L307.236 285.54C305.676 283.74 303.426 282.24 300.486 281.04C297.546 279.78 294.696 279.15 291.936 279.15C285.696 279.15 281.166 281.19 278.346 285.27C275.526 289.29 274.116 295.86 274.116 304.98C274.116 311.34 274.656 316.44 275.736 320.28C276.816 324.12 278.496 326.94 280.776 328.74C283.116 330.48 286.176 331.35 289.956 331.35C294.876 331.35 298.536 329.67 300.936 326.31C303.396 322.95 304.626 317.82 304.626 310.92H287.796V302.1H313.356V339H308.316L306.516 330.9C304.956 333.84 302.586 336.18 299.406 337.92C296.226 339.6 292.776 340.44 289.056 340.44C280.836 340.44 274.686 337.56 270.606 331.8C266.526 325.98 264.486 317.04 264.486 304.98ZM366.535 330.18L365.185 339H326.935L327.565 325.5V284.55L326.935 271.5H365.815L364.465 280.32H336.835V299.85H361.675L360.235 308.67H336.835V330.18H366.535ZM446.64 307.05H480.21V315.6H446.64V307.05ZM584.095 339.99C579.655 339.99 575.665 339.36 572.125 338.1C568.645 336.78 565.345 334.65 562.225 331.71L560.875 322.62L562.135 322.26C568.915 328.02 575.815 330.9 582.835 330.9C587.275 330.9 590.725 330.06 593.185 328.38C595.645 326.7 596.875 324.42 596.875 321.54C596.875 319.56 596.425 317.94 595.525 316.68C594.685 315.42 593.125 314.28 590.845 313.26C588.565 312.24 585.175 311.16 580.675 310.02C573.775 308.16 568.855 305.73 565.915 302.73C563.035 299.73 561.595 295.56 561.595 290.22C561.595 284.16 563.515 279.39 567.355 275.91C571.255 272.37 576.625 270.6 583.465 270.6C587.545 270.6 591.445 271.23 595.165 272.49C598.885 273.69 601.915 275.37 604.255 277.53L602.905 286.35L601.555 286.71C599.755 284.67 597.265 282.99 594.085 281.67C590.965 280.35 587.815 279.69 584.635 279.69C580.255 279.69 576.925 280.5 574.645 282.12C572.425 283.74 571.315 286.11 571.315 289.23C571.315 291.39 571.765 293.16 572.665 294.54C573.565 295.92 575.065 297.12 577.165 298.14C579.325 299.16 582.385 300.18 586.345 301.2C591.445 302.52 595.435 304.02 598.315 305.7C601.255 307.32 603.355 309.3 604.615 311.64C605.935 313.98 606.595 316.89 606.595 320.37C606.595 326.55 604.555 331.38 600.475 334.86C596.455 338.28 590.995 339.99 584.095 339.99ZM660.079 280.86L659.089 281.13L650.449 279.96H641.449V325.5L642.079 339H631.639L632.269 325.5V279.96H623.269L614.629 281.13L613.639 280.86L615.079 271.5H658.639L660.079 280.86ZM714.475 271.5L713.845 284.55V316.68C713.845 332.52 706.435 340.44 691.615 340.44C684.175 340.44 678.595 338.46 674.875 334.5C671.215 330.48 669.385 324.54 669.385 316.68V284.55L668.845 271.5H679.375L678.745 284.55V316.68C678.745 321.66 679.795 325.35 681.895 327.75C683.995 330.15 687.235 331.35 691.615 331.35C695.995 331.35 699.235 330.15 701.335 327.75C703.435 325.35 704.485 321.66 704.485 316.68V284.55L703.945 271.5H714.475ZM749.698 271.5C758.458 271.5 764.818 274.2 768.778 279.6C772.798 284.94 774.808 293.4 774.808 304.98C774.808 316.56 772.768 325.14 768.688 330.72C764.668 336.24 758.338 339 749.698 339H728.458L729.088 325.5V284.55L728.458 271.5H749.698ZM749.698 330.18C753.358 330.18 756.298 329.34 758.518 327.66C760.738 325.92 762.358 323.22 763.378 319.56C764.398 315.84 764.908 310.98 764.908 304.98C764.908 298.8 764.398 293.94 763.378 290.4C762.358 286.8 760.738 284.22 758.518 282.66C756.358 281.1 753.418 280.32 749.698 280.32H738.448V330.18H749.698ZM827.384 330.18L826.034 339H787.784L788.414 325.5V284.55L787.784 271.5H826.664L825.314 280.32H797.684V299.85H822.524L821.084 308.67H797.684V330.18H827.384ZM884.565 325.86L885.105 339.09H876.195V339H869.535L848.025 279.24V325.5L848.565 339H839.025L839.655 325.5V284.55L839.025 271.5H854.775L876.195 330.99V284.91L875.565 271.59H885.105L884.565 284.91V325.86ZM941.329 280.86L940.339 281.13L931.699 279.96H922.699V325.5L923.329 339H912.889L913.519 325.5V279.96H904.519L895.879 281.13L894.889 280.86L896.329 271.5H939.889L941.329 280.86ZM952.189 339.45C950.029 339.45 948.199 338.85 946.699 337.65C945.259 336.45 944.539 334.92 944.539 333.06C944.539 331.2 945.259 329.64 946.699 328.38C948.199 327.12 950.029 326.49 952.189 326.49C954.349 326.49 956.149 327.12 957.589 328.38C959.089 329.64 959.839 331.2 959.839 333.06C959.839 334.92 959.089 336.45 957.589 337.65C956.149 338.85 954.349 339.45 952.189 339.45ZM29.16 430.44C22.26 430.44 16.77 429.24 12.69 426.84C8.61 424.44 5.64 420.66 3.78 415.5C1.92 410.34 0.99 403.5 0.99 394.98C0.99 383.34 3.24 374.61 7.74 368.79C12.24 362.97 19.38 360.06 29.16 360.06C32.88 360.06 35.94 360.45 38.34 361.23C40.74 361.95 43.02 363.15 45.18 364.83L43.65 372.93L41.85 373.74C40.35 372.12 38.61 370.95 36.63 370.23C34.65 369.51 32.16 369.15 29.16 369.15C22.8 369.15 18.15 371.19 15.21 375.27C12.33 379.29 10.89 385.86 10.89 394.98C10.89 401.64 11.46 406.89 12.6 410.73C13.74 414.51 15.63 417.24 18.27 418.92C20.91 420.54 24.54 421.35 29.16 421.35C32.7 421.35 35.61 420.99 37.89 420.27C40.17 419.49 42.27 418.23 44.19 416.49L45.81 417.21L43.83 424.95C39.51 428.61 34.62 430.44 29.16 430.44ZM106.165 429H92.4848L84.1148 415.5L79.6148 409.2H66.8348V415.5L67.7348 429H56.9348L57.5648 415.5V374.55L56.9348 361.5H80.6048C87.1448 361.5 92.3348 363.57 96.1748 367.71C100.075 371.79 102.025 377.64 102.025 385.26C102.025 390.66 100.885 395.28 98.6048 399.12C96.3248 402.9 93.2348 405.66 89.3348 407.4L95.1848 415.5L106.165 429ZM66.8348 400.38H77.7248C82.7648 400.38 86.4548 399.18 88.7948 396.78C91.1348 394.38 92.3048 390.54 92.3048 385.26C92.3048 380.04 91.1648 376.26 88.8848 373.92C86.6048 371.52 82.9448 370.32 77.9048 370.32H66.8348V400.38ZM155.509 420.18L154.159 429H115.909L116.539 415.5V374.55L115.909 361.5H154.789L153.439 370.32H125.809V389.85H150.649L149.209 398.67H125.809V420.18H155.509ZM216.02 429H204.68L201.53 415.5L200.63 412.35L176.69 412.53L175.79 415.5L172.73 429H162.47L167.06 415.5L179.48 375L182.9 361.5H195.5L198.74 375L211.34 415.5L216.02 429ZM198.02 403.53L188.66 371.58L179.3 403.71L198.02 403.53ZM265.938 370.86L264.948 371.13L256.308 369.96H247.308V415.5L247.938 429H237.498L238.128 415.5V369.96H229.128L220.488 371.13L219.498 370.86L220.938 361.5H264.498L265.938 370.86ZM276.325 415.5V374.55L275.695 361.5H286.135L285.595 374.55V415.5L286.135 429H275.695L276.325 415.5ZM348.433 361.5L343.933 375L332.593 415.5L329.173 429H315.133L311.803 415.5L300.733 375L296.233 361.5H307.663L310.543 375L322.423 420L334.753 375L337.633 361.5H348.433ZM398 420.18L396.65 429H358.4L359.03 415.5V374.55L358.4 361.5H397.28L395.93 370.32H368.3V389.85H393.14L391.7 398.67H368.3V420.18H398ZM406.85 397.05H440.42V405.6H406.85V397.05ZM473.771 361.5C482.531 361.5 488.891 364.2 492.851 369.6C496.871 374.94 498.881 383.4 498.881 394.98C498.881 406.56 496.841 415.14 492.761 420.72C488.741 426.24 482.411 429 473.771 429H452.531L453.161 415.5V374.55L452.531 361.5H473.771ZM473.771 420.18C477.431 420.18 480.371 419.34 482.591 417.66C484.811 415.92 486.431 413.22 487.451 409.56C488.471 405.84 488.981 400.98 488.981 394.98C488.981 388.8 488.471 383.94 487.451 380.4C486.431 376.8 484.811 374.22 482.591 372.66C480.431 371.1 477.491 370.32 473.771 370.32H462.521V420.18H473.771ZM512.487 415.5V374.55L511.857 361.5H522.297L521.757 374.55V415.5L522.297 429H511.857L512.487 415.5ZM586.575 429H572.895L564.525 415.5L560.025 409.2H547.245V415.5L548.145 429H537.345L537.975 415.5V374.55L537.345 361.5H561.015C567.555 361.5 572.745 363.57 576.585 367.71C580.485 371.79 582.435 377.64 582.435 385.26C582.435 390.66 581.295 395.28 579.015 399.12C576.735 402.9 573.645 405.66 569.745 407.4L575.595 415.5L586.575 429ZM547.245 400.38H558.135C563.175 400.38 566.865 399.18 569.205 396.78C571.545 394.38 572.715 390.54 572.715 385.26C572.715 380.04 571.575 376.26 569.295 373.92C567.015 371.52 563.355 370.32 558.315 370.32H547.245V400.38ZM635.92 420.18L634.57 429H596.32L596.95 415.5V374.55L596.32 361.5H635.2L633.85 370.32H606.22V389.85H631.06L629.62 398.67H606.22V420.18H635.92ZM673.047 430.44C666.147 430.44 660.657 429.24 656.577 426.84C652.497 424.44 649.527 420.66 647.667 415.5C645.807 410.34 644.877 403.5 644.877 394.98C644.877 383.34 647.127 374.61 651.627 368.79C656.127 362.97 663.267 360.06 673.047 360.06C676.767 360.06 679.827 360.45 682.227 361.23C684.627 361.95 686.907 363.15 689.067 364.83L687.537 372.93L685.737 373.74C684.237 372.12 682.497 370.95 680.517 370.23C678.537 369.51 676.047 369.15 673.047 369.15C666.687 369.15 662.037 371.19 659.097 375.27C656.217 379.29 654.777 385.86 654.777 394.98C654.777 401.64 655.347 406.89 656.487 410.73C657.627 414.51 659.517 417.24 662.157 418.92C664.797 420.54 668.427 421.35 673.047 421.35C676.587 421.35 679.497 420.99 681.777 420.27C684.057 419.49 686.157 418.23 688.077 416.49L689.697 417.21L687.717 424.95C683.397 428.61 678.507 430.44 673.047 430.44ZM742.042 370.86L741.052 371.13L732.412 369.96H723.412V415.5L724.042 429H713.602L714.232 415.5V369.96H705.232L696.592 371.13L695.602 370.86L697.042 361.5H740.602L742.042 370.86ZM773.528 430.44C765.188 430.44 758.858 427.47 754.538 421.53C750.278 415.53 748.148 406.68 748.148 394.98C748.148 383.4 750.278 374.7 754.538 368.88C758.858 363 765.188 360.06 773.528 360.06C781.808 360.06 788.108 363 792.428 368.88C796.748 374.7 798.908 383.4 798.908 394.98C798.908 406.68 796.748 415.53 792.428 421.53C788.108 427.47 781.808 430.44 773.528 430.44ZM773.528 421.35C777.188 421.35 780.158 420.48 782.438 418.74C784.718 417 786.398 414.21 787.478 410.37C788.618 406.53 789.188 401.4 789.188 394.98C789.188 385.74 787.928 379.14 785.408 375.18C782.948 371.16 778.988 369.15 773.528 369.15C769.868 369.15 766.868 370.02 764.528 371.76C762.248 373.44 760.568 376.17 759.488 379.95C758.408 383.73 757.868 388.74 757.868 394.98C757.868 401.4 758.408 406.53 759.488 410.37C760.568 414.21 762.248 417 764.528 418.74C766.808 420.48 769.808 421.35 773.528 421.35ZM860.97 429H847.29L838.92 415.5L834.42 409.2H821.64V415.5L822.54 429H811.74L812.37 415.5V374.55L811.74 361.5H835.41C841.95 361.5 847.14 363.57 850.98 367.71C854.88 371.79 856.83 377.64 856.83 385.26C856.83 390.66 855.69 395.28 853.41 399.12C851.13 402.9 848.04 405.66 844.14 407.4L849.99 415.5L860.97 429ZM821.64 400.38H832.53C837.57 400.38 841.26 399.18 843.6 396.78C845.94 394.38 847.11 390.54 847.11 385.26C847.11 380.04 845.97 376.26 843.69 373.92C841.41 371.52 837.75 370.32 832.71 370.32H821.64V400.38ZM876.564 429.45C874.404 429.45 872.574 428.85 871.074 427.65C869.634 426.45 868.914 424.92 868.914 423.06C868.914 421.2 869.634 419.64 871.074 418.38C872.574 417.12 874.404 416.49 876.564 416.49C878.724 416.49 880.524 417.12 881.964 418.38C883.464 419.64 884.214 421.2 884.214 423.06C884.214 424.92 883.464 426.45 881.964 427.65C880.524 428.85 878.724 429.45 876.564 429.45ZM903.195 429.45C901.035 429.45 899.205 428.85 897.705 427.65C896.265 426.45 895.545 424.92 895.545 423.06C895.545 421.2 896.265 419.64 897.705 418.38C899.205 417.12 901.035 416.49 903.195 416.49C905.355 416.49 907.155 417.12 908.595 418.38C910.095 419.64 910.845 421.2 910.845 423.06C910.845 424.92 910.095 426.45 908.595 427.65C907.155 428.85 905.355 429.45 903.195 429.45ZM929.826 429.45C927.666 429.45 925.836 428.85 924.336 427.65C922.896 426.45 922.176 424.92 922.176 423.06C922.176 421.2 922.896 419.64 924.336 418.38C925.836 417.12 927.666 416.49 929.826 416.49C931.986 416.49 933.786 417.12 935.226 418.38C936.726 419.64 937.476 421.2 937.476 423.06C937.476 424.92 936.726 426.45 935.226 427.65C933.786 428.85 931.986 429.45 929.826 429.45Z"/>      
        </svg>  
    </div>
  );
};

export default CenterJustifiedText;