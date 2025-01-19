import { Client as WorkflowClient } from '@upstash/workflow';
import {Service} from '@microrealestate/common';


const { QSTASH_URL, QSTASH_TOKEN } = Service.getInstance().envConfig.getValues();

export const workflowClient= new WorkflowClient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN
});