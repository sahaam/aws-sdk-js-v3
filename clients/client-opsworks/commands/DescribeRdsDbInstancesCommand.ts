import {
  OpsWorksClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../OpsWorksClient";
import {
  DescribeRdsDbInstancesRequest,
  DescribeRdsDbInstancesResult
} from "../models/index";
import {
  deserializeAws_json1_1DescribeRdsDbInstancesCommand,
  serializeAws_json1_1DescribeRdsDbInstancesCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeRdsDbInstancesCommandInput = DescribeRdsDbInstancesRequest;
export type DescribeRdsDbInstancesCommandOutput = DescribeRdsDbInstancesResult;

export class DescribeRdsDbInstancesCommand extends $Command<
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRdsDbInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeRdsDbInstancesCommandInput,
    DescribeRdsDbInstancesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeRdsDbInstancesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRdsDbInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeRdsDbInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeRdsDbInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}