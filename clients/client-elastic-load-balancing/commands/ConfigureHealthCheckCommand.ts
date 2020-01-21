import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticLoadBalancingClient";
import {
  ConfigureHealthCheckInput,
  ConfigureHealthCheckOutput
} from "../models/index";
import {
  deserializeAws_queryConfigureHealthCheckCommand,
  serializeAws_queryConfigureHealthCheckCommand
} from "../protocols/Aws_query";
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

export type ConfigureHealthCheckCommandInput = ConfigureHealthCheckInput;
export type ConfigureHealthCheckCommandOutput = ConfigureHealthCheckOutput;

export class ConfigureHealthCheckCommand extends $Command<
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfigureHealthCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ConfigureHealthCheckCommandInput,
    ConfigureHealthCheckCommandOutput
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
    input: ConfigureHealthCheckCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryConfigureHealthCheckCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ConfigureHealthCheckCommandOutput> {
    return deserializeAws_queryConfigureHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}