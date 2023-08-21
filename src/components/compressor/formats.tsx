export interface AwsJsonData {
  timer: number;
  status: boolean;
}

export interface AwsJsonProps {
  timer: string;
  status: string;
  timerExt: string;
}

export const formatTime = (timer: number): string => {
  const date = new Date(timer * 1000);
  return date.toISOString().substr(11, 8); // Formato HH:mm:ss
};

// Conversão do formato HH:mm:ss para um valor por extenso
export const formatTimeVerbose = (timer: number): string => {
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const remainingSeconds = timer % 60;

  const hoursText = hours.toString().padStart(2, '0');
  const minutesText = minutes.toString().padStart(2, '0');
  const secondsText = remainingSeconds.toString().padStart(2, '0');

  return `${hoursText} hora(s), ${minutesText} minuto(s) e ${secondsText} segundo(s)`;
};

export const formatStatus = (status: boolean): string => (status ? 'Ligado' : 'Desligado');
