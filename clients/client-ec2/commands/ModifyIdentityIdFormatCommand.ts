import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import { ModifyIdentityIdFormatRequest } from "../models/index";
import {
  deserializeAws_ec2ModifyIdentityIdFormatCommand,
  serializeAws_ec2ModifyIdentityIdFormatCommand
} from "../protocols/Aws_ec2";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type ModifyIdentityIdFormatCommandInput = ModifyIdentityIdFormatRequest;
export type ModifyIdentityIdFormatCommandOutput = __MetadataBearer;

export class ModifyIdentityIdFormatCommand extends $Command<
  ModifyIdentityIdFormatCommandInput,
  ModifyIdentityIdFormatCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyIdentityIdFormatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyIdentityIdFormatCommandInput,
    ModifyIdentityIdFormatCommandOutput
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
    input: ModifyIdentityIdFormatCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyIdentityIdFormatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ModifyIdentityIdFormatCommandOutput> {
    return deserializeAws_ec2ModifyIdentityIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}