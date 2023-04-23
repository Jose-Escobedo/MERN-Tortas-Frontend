import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000");
const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <>
      <Navbar />
      <SuccessContainer>
        <SuccessText>Thank you for your order!</SuccessText>
        <SuccessText>
          Please check your Email for order confirmation.
        </SuccessText>
        <SuccessText>(Make sure to check your spam folder)</SuccessText>
        <OrderSuccessSvgContainer>
          <svg
            width="819"
            height="560"
            viewBox="0 0 819 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M57.0092 537.026C57.0092 537.026 -80.0655 374.253 114.845 321.956C309.756 269.66 361.114 224.912 453.263 89.3776C545.412 -46.1567 941.865 -9.89033 780.599 543.285L57.0092 537.026Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_2"
              d="M767.562 349.422H618.355V531.304H767.562V349.422Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_3"
              d="M664.563 358.939H627.717V365.873H664.563V358.939Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_4"
              d="M709.143 358.939H672.297V365.873H709.143V358.939Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_5"
              d="M752.814 358.939H715.967V365.873H752.814V358.939Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_6"
              d="M665.018 371.419H628.171V378.353H665.018V371.419Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_7"
              d="M709.598 371.419H672.752V378.353H709.598V371.419Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_8"
              d="M753.269 371.419H716.422V378.353H753.269V371.419Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_9"
              d="M665.018 383.899H628.171V390.833H665.018V383.899Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_10"
              d="M709.598 383.899H672.752V390.833H709.598V383.899Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_11"
              d="M753.269 383.899H716.422V390.833H753.269V383.899Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_12"
              d="M665.473 396.38H628.626V403.313H665.473V396.38Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_13"
              d="M710.053 396.38H673.206V403.313H710.053V396.38Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_14"
              d="M753.724 396.38H716.877V403.313H753.724V396.38Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_15"
              d="M665.928 408.86H629.081V415.793H665.928V408.86Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_16"
              d="M710.508 408.86H673.661V415.793H710.508V408.86Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_17"
              d="M754.179 408.86H717.332V415.793H754.179V408.86Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_18"
              d="M665.928 421.34H629.081V428.273H665.928V421.34Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_19"
              d="M710.508 421.34H673.661V428.273H710.508V421.34Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_20"
              d="M754.179 421.34H717.332V428.273H754.179V421.34Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_21"
              d="M754.179 440.36H629.081V486.583H754.179V440.36Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_22"
              d="M770.91 308.441H724.51V531.304H770.91V308.441Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_23"
              d="M780.167 328.848H766.52V531.304H780.167V328.848Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_24"
              d="M167.509 414.36H95.6347V531.766H167.509V414.36Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_25"
              d="M156.623 425.957H103.172V436.589H156.623V425.957Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_26"
              d="M156.623 443.712H103.172V454.343H156.623V443.712Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_27"
              d="M156.65 461.47H103.2V472.101H156.65V461.47Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_28"
              d="M156.65 478.864H103.2V489.495H156.65V478.864Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_29"
              d="M219.872 376.92H147.998V531.766H219.872V376.92Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_30"
              d="M373.678 407.427H213.049V531.766H373.678V407.427Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_31"
              d="M95.6347 462.894H55.6036V531.766H95.6347V462.894Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_32"
              d="M241.084 349.126H239.719V407.431H241.084V349.126Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_33"
              d="M256.405 362.544H255.04V407.427H256.405V362.544Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_34"
              d="M228.988 339.817H225.804V407.427H228.988V339.817Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_35"
              d="M117.27 397.535H104.078V414.365H117.27V397.535Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_36"
              d="M182.116 358.736H153.457V376.92H182.116V358.736Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_37"
              d="M207.181 339.817H194.898V376.92H207.181V339.817Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_38"
              d="M135.384 373.624H124.466V414.365H135.384V373.624Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_39"
              d="M71.3022 469.596H60.612V480.459H71.3022V469.596Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_40"
              d="M88.8158 469.596H78.1256V480.459H88.8158V469.596Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_41"
              d="M71.3022 487.854H60.612V498.717H71.3022V487.854Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_42"
              d="M88.8158 487.854H78.1256V498.717H88.8158V487.854Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_43"
              d="M71.3022 506.112H60.612V516.975H71.3022V506.112Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_44"
              d="M88.8158 506.112H78.1256V516.975H88.8158V506.112Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_45"
              d="M160.744 386.761H156.65V526.815H160.744V386.761Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_46"
              d="M178.94 386.761H174.846V526.815H178.94V386.761Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_47"
              d="M195.321 386.761H191.227V526.815H195.321V386.761Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_48"
              d="M212.612 386.761H208.518V526.815H212.612V386.761Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_49"
              d="M618.355 474.704H544.661V531.701H618.355V474.704Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_50"
              d="M687.518 517.312H684.788V520.085H687.518V517.312Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_51"
              d="M799.859 531.766H0.17868V559.499H799.859V531.766Z"
              fill="#1A1A35"
            />
            <g id="map-arrow">
              <path
                id="Vector_52"
                d="M589.237 47.3426C589.237 21.4579 609.339 0.500549 634.14 0.500549C658.941 0.500549 679.043 21.4718 679.043 47.3426C679.043 73.2135 635.973 120.532 635.973 120.532C635.973 120.532 589.237 73.2135 589.237 47.3426Z"
                fill="#F75C3D"
              />
              <path
                id="Vector_53"
                d="M634.14 72.118C647.578 72.118 658.472 61.0484 658.472 47.3935C658.472 33.7385 647.578 22.6689 634.14 22.6689C620.701 22.6689 609.807 33.7385 609.807 47.3935C609.807 61.0484 620.701 72.118 634.14 72.118Z"
                fill="#1A1A35"
              />
            </g>
            <path
              id="Vector_54"
              d="M176.297 196.633V487.11H645.298V338.735C641.58 339.074 637.858 339.298 634.131 339.405L631.451 339.466C611.691 339.802 592.005 336.92 573.142 330.928C573.074 330.669 573.01 330.406 572.938 330.152L569.003 315.139L568.616 313.659C571.321 311.376 574.126 309.219 577.032 307.188C591.634 293.086 611.381 284.793 631.483 283.615C632.393 283.564 633.271 283.527 634.162 283.504H635.1C638.516 283.445 641.932 283.599 645.33 283.966V196.605L176.297 196.633Z"
              fill="#38385C"
            />
            <path
              id="Vector_55"
              d="M145.655 487.11V493.211C145.655 505.269 150.369 516.834 158.761 525.36C167.152 533.886 178.532 538.676 190.399 538.676H630.423C642.29 538.676 653.671 533.886 662.062 525.36C670.453 516.834 675.167 505.269 675.167 493.211V487.11H145.655ZM187.465 220.978V478.036H634.14V339.41L631.46 339.47C611.697 339.807 592.008 336.925 573.142 330.933C573.074 330.674 573.01 330.41 572.938 330.156L569.003 315.143L568.616 313.664C571.321 311.381 574.126 309.223 577.032 307.193C591.634 293.09 611.381 284.798 631.483 283.619C632.393 283.568 633.271 283.531 634.162 283.508V220.978H187.465Z"
              fill="#1A1A35"
            />
            <path
              id="Vector_56"
              d="M575.935 307.526C573.033 309.547 570.228 311.704 567.52 313.997L567.906 315.476L571.841 330.489C571.914 330.748 571.982 331.011 572.046 331.266C590.918 337.26 610.613 340.142 630.382 339.803V473.423H191.218V224.186H630.382V283.952C610.285 285.131 590.538 293.405 575.935 307.526Z"
              fill="white"
            />
            <path
              id="Vector_57"
              d="M400.231 340.612C402.717 335.617 406.39 331.331 410.918 328.142C415.445 324.953 420.684 322.962 426.16 322.349L416.58 334.224C421.165 328.511 428.407 324.725 435.617 325.543C442.827 326.361 449.473 332.43 449.924 339.784C450.374 347.138 443.473 354.386 436.318 353.189C423.875 351.123 411.108 352.994 399.748 358.551C400.153 352.015 400.558 345.488 400.231 340.612Z"
              fill="#FFCBBD"
            />
            <path
              id="Vector_58"
              d="M631.456 269.702H568.643V364.079H631.456V269.702Z"
              fill="white"
            />
            <path
              id="Vector_59"
              d="M435.367 202.406H386.233V212.39H435.367V202.406Z"
              fill="#4C231F"
            />
            <path
              id="Vector_60"
              d="M645.139 269.702H634.14V364.079H645.139V269.702Z"
              fill="#38385C"
            />
            <path
              id="Vector_61"
              d="M634.14 269.702H630.387V364.079H634.14V269.702Z"
              fill="#1A1A35"
            />
            <path
              id="Vector_62"
              d="M482.376 104.22C480.288 110.776 476.269 116.524 470.863 120.684C465.747 121.109 460.621 121.435 455.487 121.659C454.694 120.327 453.513 119.277 452.107 118.657C450.701 118.037 449.14 117.876 447.64 118.197C444.461 118.884 441.188 119.001 437.969 118.544C434.174 118.028 430.56 116.581 427.438 114.329L427.07 114.079C426.277 113.586 425.379 113.294 424.452 113.23C423.525 113.165 422.596 113.329 421.744 113.707C420.893 114.086 420.144 114.668 419.562 115.404C418.979 116.14 418.58 117.008 418.399 117.934C418.345 118.202 418.295 118.47 418.254 118.738C418.117 119.459 418.003 120.185 417.908 120.915C417.872 121.16 417.84 121.41 417.808 121.659C416.711 130.492 417.921 139.462 421.315 147.669C417.676 146.347 415.097 143.158 412.404 140.357C409.711 137.555 406.349 134.856 402.501 135.018C398.652 135.18 396.309 142.275 395.677 147.475C389.409 142.413 385.756 133.885 384.668 124.826C384.195 120.891 384.205 116.911 384.7 112.979C387.83 98.3956 400.69 86.5764 417.248 84.6166C434.052 82.629 449.437 91.416 455.605 105.218C462.356 104.105 469.194 103.641 476.03 103.831C474.152 107.047 471.527 109.745 468.384 111.689C473.524 111.38 478.364 108.407 481.262 104.118C481.635 104.155 482.008 104.183 482.376 104.22Z"
              fill="#38385C"
            />
            <path
              id="Vector_63"
              d="M437.892 186.63C428.058 191.328 416.804 191.922 406.545 188.285C409.233 184.559 412.258 181.028 413.973 176.762C414.555 175.309 414.964 173.792 415.192 172.241C415.782 168.122 415.205 163.918 413.527 160.121C414.329 160.142 415.13 160.208 415.925 160.32C421.056 164.942 426.186 169.565 431.314 174.187L431.682 174.52C432.479 179.109 434.647 183.337 437.892 186.63V186.63Z"
              fill="#FFCBBD"
            />
            <path
              id="Vector_64"
              d="M448.045 169.176C445.477 169.446 442.884 169.277 440.371 168.677C437.484 167.973 434.662 167.017 431.937 165.821C431.1 165.469 430.268 165.109 429.444 164.748C425.091 162.853 420.56 160.916 415.916 160.297C415.121 160.185 414.32 160.119 413.518 160.098C412.63 160.067 411.741 160.098 410.857 160.191C404.743 160.838 398.447 156.812 396.382 150.946C395.994 149.835 395.757 148.675 395.677 147.498V147.498C396.309 142.298 398.643 135.194 402.501 135.018C406.358 134.842 409.715 137.551 412.408 140.361C415.101 143.172 417.69 146.37 421.315 147.674C417.44 138.281 416.424 127.924 418.399 117.939C418.587 116.974 419.01 116.074 419.63 115.319C420.25 114.565 421.047 113.981 421.948 113.622C422.848 113.263 423.823 113.14 424.782 113.264C425.742 113.388 426.655 113.756 427.438 114.333C433.115 118.493 440.571 119.7 447.64 118.197C449.303 117.839 451.036 118.076 452.547 118.868C454.057 119.66 455.252 120.958 455.928 122.542C456.383 123.615 456.838 124.678 457.202 125.686C458.194 135.928 459.184 146.173 460.173 156.419C460.782 162.936 454.464 168.409 448.045 169.176Z"
              fill="#FFCBBD"
            />
            <path
              id="Vector_65"
              d="M431.637 174.205C431.637 174.303 431.669 174.4 431.682 174.497L431.314 174.164L415.925 160.297C420.565 160.916 425.095 162.853 429.453 164.748C430.275 165.109 431.106 165.466 431.946 165.821C431.422 168.091 431.258 170.431 431.459 172.754C431.502 173.247 431.561 173.731 431.637 174.205Z"
              fill="#EA5C46"
            />
            <path
              id="Vector_66"
              d="M274.965 360.594C273.242 362.098 271.561 363.657 269.92 365.272C271.519 363.623 273.203 362.062 274.965 360.594V360.594Z"
              stroke="#4A4540"
              stroke-miterlimit="10"
            />
            <path
              id="Vector_67"
              d="M274.965 360.594C273.242 362.098 271.561 363.657 269.92 365.272C271.519 363.623 273.203 362.062 274.965 360.594V360.594Z"
              stroke="#4A4540"
              stroke-miterlimit="10"
            />
            <path
              id="Vector_68"
              d="M431.669 174.497L431.3 174.164L431.623 174.205C431.669 174.303 431.669 174.4 431.669 174.497Z"
              fill="#EB624D"
            />
            <path
              id="Vector_69"
              d="M452.348 192.842C450.471 194.55 448.442 196.079 446.289 197.409C439.064 201.795 430.818 204.141 422.402 204.204C415.131 204.337 407.923 202.818 401.304 199.757C400.003 199.141 398.735 198.469 397.501 197.742C394.606 196.035 391.925 193.976 389.518 191.613C390.268 190.43 391.023 189.246 391.87 188.063C393.225 186.138 394.791 184.374 396.537 182.807C399.574 185.143 402.951 186.984 406.545 188.266C416.804 191.904 428.058 191.31 437.892 186.612C440.704 185.245 443.332 183.518 445.711 181.472L447.44 184.43C449.075 187.231 450.711 190.035 452.348 192.842Z"
              fill="#38385C"
            />
            <path
              id="Vector_70"
              d="M338.46 331.654C337.614 333.195 336.715 334.705 335.762 336.184C335.539 336.535 335.307 336.886 335.085 337.238C335.262 336.891 335.439 336.549 335.612 336.202C336.349 334.742 337.041 333.262 337.7 331.769C353.271 296.178 346.411 251.282 322.484 222.222C350.929 249.525 357.475 297.13 338.46 331.654Z"
              fill="#E44531"
            />
            <path
              id="Vector_71"
              d="M338.46 331.654C337.614 333.195 336.715 334.705 335.762 336.184H335.608C334.056 336.364 332.505 336.567 330.959 336.803C309.801 339.988 288.694 349.075 274.965 360.585C292.592 345.169 314.678 335.333 337.691 331.756C337.959 331.723 338.201 331.682 338.46 331.654ZM555.633 277.458C545.275 284.742 537.924 295.785 532.979 307.558C528.034 319.331 525.305 331.917 521.916 341.975C519.464 316.294 533.32 289.771 555.633 277.458Z"
              fill="#E44531"
            />
            <path
              id="Vector_72"
              d="M555.633 277.458C545.275 284.742 537.924 295.785 532.979 307.558C528.034 319.331 525.305 331.917 521.916 341.975C519.464 316.294 533.32 289.771 555.633 277.458ZM539.216 464.336V473.086H303.096V465.321C303.264 464.544 303.428 463.768 303.596 463.01C305.962 451.956 308.329 440.904 310.697 429.854C346.603 422.366 380.142 402.952 404.184 374.757C405.676 373.009 407.131 371.228 408.551 369.413C408.005 366.994 407.459 364.575 406.913 362.156C407.826 362.142 408.719 361.887 409.506 361.417L412.759 359.434C412.455 365.138 412.022 370.828 411.457 376.504C410.079 390.36 407.953 404.129 405.089 417.748C435.663 412.909 466.236 409.377 496.815 405.855C497.206 395.286 497.617 384.654 498.048 373.962C498.129 372.039 498.202 370.12 498.284 368.193L498.866 368.248C499.485 369.376 500.117 370.499 500.75 371.623C502.023 373.888 503.324 376.145 504.653 378.394C511.476 389.987 524.482 397.456 537.738 397.808L539.184 463.01C539.198 463.439 539.207 463.892 539.216 464.336Z"
              fill="#E44531"
            />
            <path
              id="Vector_73"
              d="M498.325 367.278C498.325 367.583 498.298 367.888 498.289 368.202M498.866 368.248C498.671 368.248 498.48 368.211 498.284 368.193C498.284 367.888 498.311 367.583 498.32 367.268L498.866 368.248Z"
              stroke="#4A4540"
              stroke-miterlimit="10"
            />
            <path
              id="Vector_74"
              d="M633.216 190.037L613.951 178.31L607.483 174.376L552.44 273.293C546.381 247.63 533.512 222.883 513.901 205.965C502.01 195.713 488.991 189.417 474.88 186.399C465.85 184.535 456.621 183.861 447.422 184.393C449.059 187.197 450.697 190.003 452.335 192.81C450.457 194.518 448.429 196.046 446.276 197.377C439.051 201.763 430.804 204.108 422.389 204.172C415.118 204.305 407.91 202.785 401.291 199.725C399.99 199.109 398.722 198.437 397.488 197.71C394.592 196.002 391.912 193.944 389.504 191.581C390.255 190.397 391.01 189.214 391.856 188.031C380.178 188.446 368.554 189.852 357.106 192.232C342.314 195.329 327.822 199.753 313.8 205.452C306.828 208.262 300.547 212.591 295.4 218.134C290.253 223.678 286.365 230.3 284.008 237.535C268.26 285.767 252.51 334.003 236.758 382.245C229.357 404.894 247.894 432.165 271.371 433.09C284.557 433.615 297.756 432.51 310.679 429.799C346.603 422.366 380.142 402.952 404.184 374.793C405.676 373.046 407.131 371.265 408.551 369.45C408.005 367.031 407.459 364.612 406.913 362.193C405.689 356.748 404.475 351.303 403.31 345.853C403.201 345.132 403.087 344.411 402.978 343.69C402.833 342.243 402.669 340.838 402.523 339.433C402.551 339.373 402.582 339.322 402.61 339.267H402.501C392.839 338.037 383.126 336.817 373.387 336.031C360.814 335.033 348.231 334.783 335.753 336.211C335.53 336.563 335.298 336.914 335.075 337.265C335.253 336.919 335.43 336.577 335.603 336.23C334.052 336.41 332.501 336.614 330.954 336.849C309.797 340.034 288.689 349.121 274.96 360.631C273.238 362.135 271.556 363.694 269.916 365.309C271.514 363.659 273.198 362.097 274.96 360.631C292.588 345.216 314.673 335.379 337.687 331.802C353.258 296.21 346.398 251.314 322.47 222.254C350.92 249.525 357.466 297.135 338.451 331.677C349.752 329.972 361.227 329.817 372.568 331.215C382.828 332.469 392.881 335.089 402.469 339.008L402.696 339.1C405.157 334.457 408.733 330.52 413.091 327.656C412.534 310.611 410.77 293.63 407.814 276.843L458.926 267.316L488.217 261.858L503.142 259.084C502.515 272.717 501.89 286.34 501.268 299.954C500.245 322.525 499.249 345.017 498.33 367.292C498.507 367.62 498.689 367.934 498.871 368.262C499.49 369.39 500.122 370.513 500.754 371.636C502.028 373.901 503.329 376.159 504.657 378.408C511.481 390.001 524.486 397.47 537.742 397.822C539.279 397.86 540.816 397.802 542.346 397.646C557.103 396.13 570.549 385.378 575.494 371.16L637.388 192.593C635.991 191.715 634.608 190.878 633.216 190.037ZM532.979 307.553C528.03 319.322 525.305 331.913 521.916 341.971C519.46 316.294 533.325 289.771 555.633 277.453C545.275 284.742 537.919 295.78 532.979 307.553V307.553Z"
              fill="#F75C3D"
            />
            <path
              id="Vector_75"
              d="M543.87 256.477H366.459V420.106H543.87V256.477Z"
              fill="#FEBE3D"
            />
            <path
              id="Vector_76"
              d="M409.738 256.477H366.459V420.106H409.738V256.477Z"
              fill="#F8A23A"
            />
            <path
              id="Vector_77"
              d="M538.584 270.515H502.342V285.653H538.584V270.515Z"
              fill="white"
            />
            <path
              id="Vector_78"
              d="M539.166 293.613H502.924V308.75H539.166V293.613Z"
              fill="white"
            />
            <path
              id="Vector_79"
              d="M402.692 339.073C402.66 339.128 402.632 339.184 402.605 339.239H402.496C392.834 338.01 383.122 336.789 373.382 336.003C360.809 335.005 348.227 334.755 335.749 336.184C336.704 334.7 337.596 333.193 338.446 331.654C349.747 329.949 361.222 329.794 372.564 331.192C382.824 332.446 392.877 335.066 402.464 338.985L402.692 339.073Z"
              fill="#E44531"
            />
            <path
              id="Vector_80"
              d="M659.414 175.745C650.208 179.551 641.426 184.34 633.216 190.032L613.951 178.31C614.329 165.774 616.91 153.407 621.571 141.794C622.603 139.229 627.061 139.46 627.826 142.127C629.667 148.597 630.132 155.391 629.19 162.058C636.068 152.33 642.95 142.603 649.834 132.878C650.445 132.019 651.324 131.395 652.329 131.109C653.333 130.822 654.403 130.889 655.365 131.299C656.328 131.709 657.125 132.437 657.628 133.366C658.131 134.294 658.31 135.369 658.136 136.414C657.335 141.128 659.009 145.889 660.915 150.281C662.821 154.672 665.009 159.031 665.409 163.796C665.81 168.562 663.772 173.947 659.414 175.745Z"
              fill="#FFCBBD"
            />
            <path
              id="Vector_81"
              d="M303.096 462.996H303.596C303.428 463.772 303.264 464.549 303.096 465.307V462.996ZM539.216 462.996V464.341C539.216 463.879 539.216 463.444 539.184 462.996H539.216Z"
              stroke="#4A4540"
              stroke-miterlimit="10"
            />
            <path
              id="Vector_82"
              d="M450.733 130.835C452.071 130.835 453.158 133.234 453.158 136.197C453.158 139.159 452.071 141.558 450.733 141.558C449.396 141.558 448.309 139.159 448.309 136.197C448.309 133.234 449.41 130.835 450.733 130.835ZM438.128 131.449C439.657 131.449 440.899 133.848 440.899 136.811C440.899 139.774 439.657 142.173 438.128 142.173C436.6 142.173 435.358 139.774 435.358 136.811C435.358 133.848 436.6 131.449 438.128 131.449ZM446.999 125.584C447.408 123.855 449.273 122.736 451.034 122.917C452.794 123.097 454.286 124.359 455.128 125.912C455.915 127.511 456.304 129.283 456.261 131.07C454.714 127.091 450.279 124.493 446.999 125.584ZM436.727 122.866C434.808 122.656 432.866 122.906 431.059 123.598C429.253 124.289 427.631 125.401 426.324 126.845C425.017 128.289 424.062 130.025 423.536 131.913C423.01 133.8 422.927 135.787 423.294 137.713C425.255 130.733 430.832 124.914 436.727 122.866Z"
              fill="#1A1A35"
            />
            <path
              id="Vector_83"
              d="M445.152 135.291C445.234 138.773 445.317 142.255 445.402 145.737C445.803 144.497 446.531 143.394 447.508 142.548C448.523 141.762 449.987 141.461 451.097 142.085C452.207 142.709 452.667 144.433 451.816 145.399L447.308 150.516L450.288 145.057C450.445 144.751 450.492 144.4 450.423 144.062C450.354 143.724 450.173 143.42 449.909 143.203C449.645 142.986 449.316 142.867 448.976 142.868C448.636 142.869 448.308 142.99 448.045 143.209L443.828 146.86C444.224 143.315 444.624 139.774 445.152 135.291ZM431.214 151.455C434.011 153.277 437.174 154.44 440.471 154.86C443.768 155.28 447.116 154.946 450.27 153.881C449.008 155.068 447.489 155.938 445.836 156.42C444.183 156.901 442.442 156.982 440.753 156.655C437.409 155.957 434.439 153.539 431.214 151.455Z"
              fill="#EA5C46"
            />
            <path
              id="Vector_84"
              d="M431.141 361.089C422.387 360.155 413.559 360.206 404.816 361.241L395.509 343.325C401.438 333.36 408.973 324.479 417.799 317.052C419.741 315.42 423.016 317.556 422.389 320.052C420.857 326.124 418.149 331.825 414.423 336.822L443.273 322.169C444.095 321.755 445.032 321.641 445.927 321.847C446.821 322.052 447.619 322.564 448.186 323.297C448.71 324.1 448.971 325.051 448.932 326.014C448.892 326.976 448.555 327.902 447.968 328.659C445.238 332.135 444.328 336.724 443.81 341.106C443.291 345.488 442.973 350 441.081 354.049C439.188 358.098 435.258 361.528 431.141 361.089Z"
              fill="#FFCBBD"
            />
            <path
              id="Vector_85"
              d="M355.246 335.574L401.805 334.279C399.698 339.091 402.469 344.518 404.811 349.219C407.154 353.919 408.951 360.118 405.48 364.01L364.598 410.029C360.25 414.929 350.783 412.659 349.041 406.304C345.629 393.851 342.185 381.158 342.631 368.244C343.077 355.329 348.017 341.938 355.246 335.574Z"
              fill="#F75C3D"
            />
            <path
              id="Vector_86"
              d="M191.218 265.606C243.558 265.606 285.987 222.493 285.987 169.311C285.987 116.128 243.558 73.0147 191.218 73.0147C138.879 73.0147 96.449 116.128 96.449 169.311C96.449 222.493 138.879 265.606 191.218 265.606Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_87"
              d="M191.218 251.698C235.998 251.698 272.299 214.812 272.299 169.311C272.299 123.809 235.998 86.9231 191.218 86.9231C146.438 86.9231 110.137 123.809 110.137 169.311C110.137 214.812 146.438 251.698 191.218 251.698Z"
              fill="#E2EEFC"
            />
            <path
              id="Vector_88"
              d="M191.218 178.093C195.992 178.093 199.861 174.161 199.861 169.31C199.861 164.46 195.992 160.528 191.218 160.528C186.445 160.528 182.575 164.46 182.575 169.31C182.575 174.161 186.445 178.093 191.218 178.093Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_89"
              d="M189.335 155.957V101.414C189.335 100.801 189.574 100.213 190.001 99.7798C190.428 99.3463 191.006 99.1028 191.609 99.1028V99.1028C192.213 99.1028 192.791 99.3463 193.218 99.7798C193.644 100.213 193.884 100.801 193.884 101.414V155.957C193.884 156.57 193.644 157.158 193.218 157.591C192.791 158.024 192.213 158.268 191.609 158.268C191.006 158.268 190.428 158.024 190.001 157.591C189.574 157.158 189.335 156.57 189.335 155.957ZM177.962 171.622H124.284C123.681 171.622 123.103 171.378 122.676 170.945C122.249 170.511 122.01 169.923 122.01 169.311C122.01 168.698 122.249 168.11 122.676 167.676C123.103 167.243 123.681 166.999 124.284 166.999H177.962C178.566 166.999 179.144 167.243 179.571 167.676C179.997 168.11 180.237 168.698 180.237 169.311C180.237 169.923 179.997 170.511 179.571 170.945C179.144 171.378 178.566 171.622 177.962 171.622Z"
              fill="#CCDEFF"
            />
            <path
              id="Vector_90"
              d="M458.367 116.131L437.969 118.544L417.908 120.915L414.014 121.378L384.673 124.849L384.35 124.886C384.286 124.474 384.232 124.058 384.182 123.647C383.773 120.098 383.949 116.505 384.705 113.016C387.835 98.4326 400.695 86.6134 417.253 84.6536C434.057 82.666 449.442 91.4529 455.61 105.255C456.978 108.312 457.868 111.566 458.248 114.902C458.298 115.299 458.335 115.715 458.367 116.131Z"
              fill="#F75C3D"
            />
            <path
              id="Vector_91"
              d="M496.469 112.008C496.403 113.582 495.805 115.085 494.776 116.264C493.747 117.442 492.349 118.225 490.819 118.479C484.193 119.404 477.541 120.142 470.863 120.693C465.747 121.119 460.621 121.444 455.487 121.669C442.959 122.228 430.381 122.205 417.808 121.669C416.493 121.613 415.174 121.553 413.859 121.484L414.014 121.382C415.406 120.458 416.821 119.584 418.254 118.747C421.12 117.046 424.058 115.493 427.07 114.088C442.402 106.905 459.157 103.405 476.035 103.859C477.782 103.905 479.526 103.996 481.266 104.132C481.635 104.164 482.008 104.192 482.376 104.229C485.279 104.482 488.16 104.859 491.019 105.361C492.541 105.664 493.914 106.49 494.906 107.701C495.899 108.912 496.451 110.433 496.469 112.008Z"
              fill="#E44531"
            />
            <path
              id="Vector_92"
              d="M474.143 359.179L483.818 387.024C496 368.424 516.289 354.409 539.184 348.793L474.056 407.958C474.184 392.145 474.306 376.333 474.143 359.179Z"
              fill="#F75C3D"
            />

            <defs>
              <clipPath id="clip0_1_100">
                <rect width="819" height="560" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </OrderSuccessSvgContainer>
      </SuccessContainer>
      <Footer />
    </>
  );
};

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  background: linear-gradient(
    90deg,
    rgba(24, 24, 71, 1) 0%,
    rgba(10, 10, 23, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const SuccessText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const OrderSuccessSvgContainer = styled.div`
  svg {
    height: 450px;
    width: 450px;
  }

  #map-arrow {
    animation: moveInfinite 1s linear infinite;
  }

  @keyframes moveInfinite {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export default Success;
