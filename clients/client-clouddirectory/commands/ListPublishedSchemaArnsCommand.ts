import {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudDirectoryClient";
import {
  ListPublishedSchemaArnsRequest,
  ListPublishedSchemaArnsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListPublishedSchemaArnsCommand,
  serializeAws_restJson1_1ListPublishedSchemaArnsCommand
} from "../protocols/Aws_restJson1_1";
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

export type ListPublishedSchemaArnsCommandInput = ListPublishedSchemaArnsRequest;
export type ListPublishedSchemaArnsCommandOutput = ListPublishedSchemaArnsResponse;

export class ListPublishedSchemaArnsCommand extends $Command<
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPublishedSchemaArnsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPublishedSchemaArnsCommandInput,
    ListPublishedSchemaArnsCommandOutput
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
    input: ListPublishedSchemaArnsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListPublishedSchemaArnsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListPublishedSchemaArnsCommandOutput> {
    return deserializeAws_restJson1_1ListPublishedSchemaArnsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}