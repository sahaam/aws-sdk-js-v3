import {
  KinesisClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisClient";
import {
  ListStreamConsumersInput,
  ListStreamConsumersOutput
} from "../models/index";
import {
  deserializeAws_json1_1ListStreamConsumersCommand,
  serializeAws_json1_1ListStreamConsumersCommand
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

export type ListStreamConsumersCommandInput = ListStreamConsumersInput;
export type ListStreamConsumersCommandOutput = ListStreamConsumersOutput;

export class ListStreamConsumersCommand extends $Command<
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamConsumersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListStreamConsumersCommandInput,
    ListStreamConsumersCommandOutput
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
    input: ListStreamConsumersCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStreamConsumersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListStreamConsumersCommandOutput> {
    return deserializeAws_json1_1ListStreamConsumersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}