import { useParams } from 'react-router-dom';

export default function useParamId(): number {
  const params: any = useParams();
  const id = parseFloat(params.id);
  if (isNaN(id)) {
    throw new Error(`Unknown id: ${params.id}`);
  }
  return id;
}
