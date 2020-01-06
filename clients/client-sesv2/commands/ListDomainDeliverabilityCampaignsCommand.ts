import {
  SESv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESv2Client";
import {
  ListDomainDeliverabilityCampaignsRequest,
  ListDomainDeliverabilityCampaignsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand,
  serializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand
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

export type ListDomainDeliverabilityCampaignsCommandInput = ListDomainDeliverabilityCampaignsRequest;
export type ListDomainDeliverabilityCampaignsCommandOutput = ListDomainDeliverabilityCampaignsResponse;

export class ListDomainDeliverabilityCampaignsCommand extends $Command<
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainDeliverabilityCampaignsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListDomainDeliverabilityCampaignsCommandInput,
    ListDomainDeliverabilityCampaignsCommandOutput
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
    input: ListDomainDeliverabilityCampaignsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput> {
    return deserializeAws_restJson1_1ListDomainDeliverabilityCampaignsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}