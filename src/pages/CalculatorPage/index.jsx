import styled from "styled-components";
import StepperComponent from "../../components/StepperComponent";
import { StepperProvider } from "../../context";
import { useState } from "react";
import Step1 from "../../components/StepperComponent/StepItems/Step1";
import Step2 from "../../components/StepperComponent/StepItems/Step2";
import Step3 from "../../components/StepperComponent/StepItems/Step3";
import Step4 from "../../components/StepperComponent/StepItems/Step4";

const Container = styled.div`
  margin-top: 40px;
  height: 100%;
 
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts[1]};
  font-weight: bold;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-family: ${props => props.theme.fonts[1]};
  font-weight: medium;
  color: #787878;
  text-align: center;
`;

const StepButton = styled.button`
display: none;
  background: #9BD9A7;
  border-radius: 10px;
  border: none;
  padding: 10px;
 align-items: center;
 justify-content: center;
  color: #fff;
  width: 100px;
  position: absolute;
  bottom: 0 !important;
  cursor: pointer;
  margin-bottom: 50px;


`;


export default function CalculatorPage() {
  const pages = ['', '', '', ''];
  const steps = [...Array(4).keys()].map((index) => ({ title: pages[index] }));

  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container>
      <Title>
        Calculadora de tinta
      </Title>
      <SubTitle>
        Calcule com exatidão a quantidade de tinta para um ambiente
      </SubTitle>
      <StepperComponent
        onStepClick={setActiveStep}
        step={activeStep}
        steps={steps.map((step, index) => ({
          ...step,

          onClick: (event) => {
            console.log("clicked", index);
            step.onClick?.(event);
            setActiveStep(index);
          }
        }))}
        theme={{
          breadcrumb: {
            activeColor: "#9BD9A7",
            activeBorderColor: "transparent"
          }
        }}
      />

      {
        activeStep == 0 ? <Step1 /> : ""

      }
      {
        activeStep == 1 ? <Step2 /> : ""

      }
      {
        activeStep == 2 ? <Step3 /> : ""

      }
      {
        activeStep == 3 ? <Step4 /> : ""
      }

      <center>
        <StepButton type="button" onClick={() => setActiveStep((i) => i + 1)}>
          Continuar
        </StepButton>
      </center>

    </Container>
  );
}