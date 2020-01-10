import {
  CreateServerCommandInput,
  CreateServerCommandOutput
} from "../commands/CreateServerCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeleteServerCommandInput,
  DeleteServerCommandOutput
} from "../commands/DeleteServerCommand";
import {
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput
} from "../commands/DeleteSshPublicKeyCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeServerCommandInput,
  DescribeServerCommandOutput
} from "../commands/DescribeServerCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "../commands/DescribeUserCommand";
import {
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput
} from "../commands/ImportSshPublicKeyCommand";
import {
  ListServersCommandInput,
  ListServersCommandOutput
} from "../commands/ListServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "../commands/ListUsersCommand";
import {
  StartServerCommandInput,
  StartServerCommandOutput
} from "../commands/StartServerCommand";
import {
  StopServerCommandInput,
  StopServerCommandOutput
} from "../commands/StopServerCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput
} from "../commands/TestIdentityProviderCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateServerCommandInput,
  UpdateServerCommandOutput
} from "../commands/UpdateServerCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "../commands/UpdateUserCommand";
import {
  CreateServerRequest,
  CreateServerResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteServerRequest,
  DeleteSshPublicKeyRequest,
  DeleteUserRequest,
  DescribeServerRequest,
  DescribeServerResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DescribedServer,
  DescribedUser,
  EndpointDetails,
  HomeDirectoryMapEntry,
  IdentityProviderDetails,
  ImportSshPublicKeyRequest,
  ImportSshPublicKeyResponse,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidRequestException,
  ListServersRequest,
  ListServersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListedServer,
  ListedUser,
  ResourceExistsException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  SshPublicKey,
  StartServerRequest,
  StopServerRequest,
  Tag,
  TagResourceRequest,
  TestIdentityProviderRequest,
  TestIdentityProviderResponse,
  ThrottlingException,
  UntagResourceRequest,
  UpdateServerRequest,
  UpdateServerResponse,
  UpdateUserRequest,
  UpdateUserResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateServerCommand(
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.CreateServer";
  let body: any = {};
  const wrappedBody: any = {
    CreateServerRequest: serializeAws_json1_1CreateServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateUserCommand(
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.CreateUser";
  let body: any = {};
  const wrappedBody: any = {
    CreateUserRequest: serializeAws_json1_1CreateUserRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateUser",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteServerCommand(
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DeleteServer";
  let body: any = {};
  const wrappedBody: any = {
    DeleteServerRequest: serializeAws_json1_1DeleteServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteSshPublicKeyCommand(
  input: DeleteSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DeleteSshPublicKey";
  let body: any = {};
  const wrappedBody: any = {
    DeleteSshPublicKeyRequest: serializeAws_json1_1DeleteSshPublicKeyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteSshPublicKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteUserCommand(
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DeleteUser";
  let body: any = {};
  const wrappedBody: any = {
    DeleteUserRequest: serializeAws_json1_1DeleteUserRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteUser",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeServerCommand(
  input: DescribeServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DescribeServer";
  let body: any = {};
  const wrappedBody: any = {
    DescribeServerRequest: serializeAws_json1_1DescribeServerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeUserCommand(
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DescribeUser";
  let body: any = {};
  const wrappedBody: any = {
    DescribeUserRequest: serializeAws_json1_1DescribeUserRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeUser",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportSshPublicKeyCommand(
  input: ImportSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ImportSshPublicKey";
  let body: any = {};
  const wrappedBody: any = {
    ImportSshPublicKeyRequest: serializeAws_json1_1ImportSshPublicKeyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportSshPublicKey",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListServersCommand(
  input: ListServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ListServers";
  let body: any = {};
  const wrappedBody: any = {
    ListServersRequest: serializeAws_json1_1ListServersRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListServers",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceRequest: serializeAws_json1_1ListTagsForResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListUsersCommand(
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ListUsers";
  let body: any = {};
  const wrappedBody: any = {
    ListUsersRequest: serializeAws_json1_1ListUsersRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListUsers",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartServerCommand(
  input: StartServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.StartServer";
  let body: any = {};
  const wrappedBody: any = {
    StartServerRequest: serializeAws_json1_1StartServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopServerCommand(
  input: StopServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.StopServer";
  let body: any = {};
  const wrappedBody: any = {
    StopServerRequest: serializeAws_json1_1StopServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TestIdentityProviderCommand(
  input: TestIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.TestIdentityProvider";
  let body: any = {};
  const wrappedBody: any = {
    TestIdentityProviderRequest: serializeAws_json1_1TestIdentityProviderRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TestIdentityProvider",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateServerCommand(
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.UpdateServer";
  let body: any = {};
  const wrappedBody: any = {
    UpdateServerRequest: serializeAws_json1_1UpdateServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateUserCommand(
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.UpdateUser";
  let body: any = {};
  const wrappedBody: any = {
    UpdateUserRequest: serializeAws_json1_1UpdateUserRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateUser",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = await deserializeAws_json1_1ResourceExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = await deserializeAws_json1_1ResourceExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServerCommandError(output, context);
  }
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteSshPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSshPublicKeyCommandError(
      output,
      context
    );
  }
  const response: DeleteSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSshPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServerResponse(data, context);
  const response: DescribeServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportSshPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportSshPublicKeyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportSshPublicKeyResponse(data, context);
  const response: ImportSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportSshPublicKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportSshPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = await deserializeAws_json1_1ResourceExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListServersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServersResponse(data, context);
  const response: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.necco.coral#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.necco.coral#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.necco.coral#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartServerCommandError(output, context);
  }
  const response: StartServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopServerCommandError(output, context);
  }
  const response: StopServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TestIdentityProviderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TestIdentityProviderCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestIdentityProviderResponse(data, context);
  const response: TestIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestIdentityProviderResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TestIdentityProviderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = await deserializeAws_json1_1ResourceExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUserResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = await deserializeAws_json1_1InternalServiceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.necco.coral#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    output.body,
    context
  );
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceError(
    output.body,
    context
  );
  const contents: InternalServiceError = {
    __type: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    output.body,
    context
  );
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(
    output.body,
    context
  );
  const contents: ResourceExistsException = {
    __type: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    output.body,
    context
  );
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CreateServerRequest = (
  input: CreateServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndpointDetails !== undefined) {
    bodyParams["EndpointDetails"] = serializeAws_json1_1EndpointDetails(
      input.EndpointDetails,
      context
    );
  }
  if (input.EndpointType !== undefined) {
    bodyParams["EndpointType"] = input.EndpointType;
  }
  if (input.HostKey !== undefined) {
    bodyParams["HostKey"] = input.HostKey;
  }
  if (input.IdentityProviderDetails !== undefined) {
    bodyParams[
      "IdentityProviderDetails"
    ] = serializeAws_json1_1IdentityProviderDetails(
      input.IdentityProviderDetails,
      context
    );
  }
  if (input.IdentityProviderType !== undefined) {
    bodyParams["IdentityProviderType"] = input.IdentityProviderType;
  }
  if (input.LoggingRole !== undefined) {
    bodyParams["LoggingRole"] = input.LoggingRole;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateUserRequest = (
  input: CreateUserRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HomeDirectory !== undefined) {
    bodyParams["HomeDirectory"] = input.HomeDirectory;
  }
  if (input.HomeDirectoryMappings !== undefined) {
    bodyParams[
      "HomeDirectoryMappings"
    ] = serializeAws_json1_1HomeDirectoryMappings(
      input.HomeDirectoryMappings,
      context
    );
  }
  if (input.HomeDirectoryType !== undefined) {
    bodyParams["HomeDirectoryType"] = input.HomeDirectoryType;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.SshPublicKeyBody !== undefined) {
    bodyParams["SshPublicKeyBody"] = input.SshPublicKeyBody;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteServerRequest = (
  input: DeleteServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSshPublicKeyRequest = (
  input: DeleteSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.SshPublicKeyId !== undefined) {
    bodyParams["SshPublicKeyId"] = input.SshPublicKeyId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteUserRequest = (
  input: DeleteUserRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeServerRequest = (
  input: DescribeServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUserRequest = (
  input: DescribeUserRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1EndpointDetails = (
  input: EndpointDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.VpcEndpointId !== undefined) {
    bodyParams["VpcEndpointId"] = input.VpcEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1HomeDirectoryMapEntry = (
  input: HomeDirectoryMapEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Entry !== undefined) {
    bodyParams["Entry"] = input.Entry;
  }
  if (input.Target !== undefined) {
    bodyParams["Target"] = input.Target;
  }
  return bodyParams;
};

const serializeAws_json1_1HomeDirectoryMappings = (
  input: Array<HomeDirectoryMapEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1HomeDirectoryMapEntry(entry, context)
  );
};

const serializeAws_json1_1IdentityProviderDetails = (
  input: IdentityProviderDetails,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.InvocationRole !== undefined) {
    bodyParams["InvocationRole"] = input.InvocationRole;
  }
  if (input.Url !== undefined) {
    bodyParams["Url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportSshPublicKeyRequest = (
  input: ImportSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.SshPublicKeyBody !== undefined) {
    bodyParams["SshPublicKeyBody"] = input.SshPublicKeyBody;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListServersRequest = (
  input: ListServersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUsersRequest = (
  input: ListUsersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1StartServerRequest = (
  input: StartServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopServerRequest = (
  input: StopServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TestIdentityProviderRequest = (
  input: TestIdentityProviderRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  if (input.UserPassword !== undefined) {
    bodyParams["UserPassword"] = input.UserPassword;
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateServerRequest = (
  input: UpdateServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndpointDetails !== undefined) {
    bodyParams["EndpointDetails"] = serializeAws_json1_1EndpointDetails(
      input.EndpointDetails,
      context
    );
  }
  if (input.EndpointType !== undefined) {
    bodyParams["EndpointType"] = input.EndpointType;
  }
  if (input.HostKey !== undefined) {
    bodyParams["HostKey"] = input.HostKey;
  }
  if (input.IdentityProviderDetails !== undefined) {
    bodyParams[
      "IdentityProviderDetails"
    ] = serializeAws_json1_1IdentityProviderDetails(
      input.IdentityProviderDetails,
      context
    );
  }
  if (input.LoggingRole !== undefined) {
    bodyParams["LoggingRole"] = input.LoggingRole;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateUserRequest = (
  input: UpdateUserRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HomeDirectory !== undefined) {
    bodyParams["HomeDirectory"] = input.HomeDirectory;
  }
  if (input.HomeDirectoryMappings !== undefined) {
    bodyParams[
      "HomeDirectoryMappings"
    ] = serializeAws_json1_1HomeDirectoryMappings(
      input.HomeDirectoryMappings,
      context
    );
  }
  if (input.HomeDirectoryType !== undefined) {
    bodyParams["HomeDirectoryType"] = input.HomeDirectoryType;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateServerResponse = (
  output: any,
  context: __SerdeContext
): CreateServerResponse => {
  let contents: any = {
    __type: "CreateServerResponse",
    ServerId: undefined
  };
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  return contents;
};

const deserializeAws_json1_1CreateUserResponse = (
  output: any,
  context: __SerdeContext
): CreateUserResponse => {
  let contents: any = {
    __type: "CreateUserResponse",
    ServerId: undefined,
    UserName: undefined
  };
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeServerResponse = (
  output: any,
  context: __SerdeContext
): DescribeServerResponse => {
  let contents: any = {
    __type: "DescribeServerResponse",
    Server: undefined
  };
  if (output.Server !== undefined) {
    contents.Server = deserializeAws_json1_1DescribedServer(
      output.Server,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeUserResponse = (
  output: any,
  context: __SerdeContext
): DescribeUserResponse => {
  let contents: any = {
    __type: "DescribeUserResponse",
    ServerId: undefined,
    User: undefined
  };
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.User !== undefined) {
    contents.User = deserializeAws_json1_1DescribedUser(output.User, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribedServer = (
  output: any,
  context: __SerdeContext
): DescribedServer => {
  let contents: any = {
    __type: "DescribedServer",
    Arn: undefined,
    EndpointDetails: undefined,
    EndpointType: undefined,
    HostKeyFingerprint: undefined,
    IdentityProviderDetails: undefined,
    IdentityProviderType: undefined,
    LoggingRole: undefined,
    ServerId: undefined,
    State: undefined,
    Tags: undefined,
    UserCount: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.EndpointDetails !== undefined) {
    contents.EndpointDetails = deserializeAws_json1_1EndpointDetails(
      output.EndpointDetails,
      context
    );
  }
  if (output.EndpointType !== undefined) {
    contents.EndpointType = output.EndpointType;
  }
  if (output.HostKeyFingerprint !== undefined) {
    contents.HostKeyFingerprint = output.HostKeyFingerprint;
  }
  if (output.IdentityProviderDetails !== undefined) {
    contents.IdentityProviderDetails = deserializeAws_json1_1IdentityProviderDetails(
      output.IdentityProviderDetails,
      context
    );
  }
  if (output.IdentityProviderType !== undefined) {
    contents.IdentityProviderType = output.IdentityProviderType;
  }
  if (output.LoggingRole !== undefined) {
    contents.LoggingRole = output.LoggingRole;
  }
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.UserCount !== undefined) {
    contents.UserCount = output.UserCount;
  }
  return contents;
};

const deserializeAws_json1_1DescribedUser = (
  output: any,
  context: __SerdeContext
): DescribedUser => {
  let contents: any = {
    __type: "DescribedUser",
    Arn: undefined,
    HomeDirectory: undefined,
    HomeDirectoryMappings: undefined,
    HomeDirectoryType: undefined,
    Policy: undefined,
    Role: undefined,
    SshPublicKeys: undefined,
    Tags: undefined,
    UserName: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.HomeDirectory !== undefined) {
    contents.HomeDirectory = output.HomeDirectory;
  }
  if (output.HomeDirectoryMappings !== undefined) {
    contents.HomeDirectoryMappings = deserializeAws_json1_1HomeDirectoryMappings(
      output.HomeDirectoryMappings,
      context
    );
  }
  if (output.HomeDirectoryType !== undefined) {
    contents.HomeDirectoryType = output.HomeDirectoryType;
  }
  if (output.Policy !== undefined) {
    contents.Policy = output.Policy;
  }
  if (output.Role !== undefined) {
    contents.Role = output.Role;
  }
  if (output.SshPublicKeys !== undefined) {
    contents.SshPublicKeys = deserializeAws_json1_1SshPublicKeys(
      output.SshPublicKeys,
      context
    );
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1EndpointDetails = (
  output: any,
  context: __SerdeContext
): EndpointDetails => {
  let contents: any = {
    __type: "EndpointDetails",
    VpcEndpointId: undefined
  };
  if (output.VpcEndpointId !== undefined) {
    contents.VpcEndpointId = output.VpcEndpointId;
  }
  return contents;
};

const deserializeAws_json1_1HomeDirectoryMapEntry = (
  output: any,
  context: __SerdeContext
): HomeDirectoryMapEntry => {
  let contents: any = {
    __type: "HomeDirectoryMapEntry",
    Entry: undefined,
    Target: undefined
  };
  if (output.Entry !== undefined) {
    contents.Entry = output.Entry;
  }
  if (output.Target !== undefined) {
    contents.Target = output.Target;
  }
  return contents;
};

const deserializeAws_json1_1HomeDirectoryMappings = (
  output: any,
  context: __SerdeContext
): Array<HomeDirectoryMapEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HomeDirectoryMapEntry(entry, context)
  );
};

const deserializeAws_json1_1IdentityProviderDetails = (
  output: any,
  context: __SerdeContext
): IdentityProviderDetails => {
  let contents: any = {
    __type: "IdentityProviderDetails",
    InvocationRole: undefined,
    Url: undefined
  };
  if (output.InvocationRole !== undefined) {
    contents.InvocationRole = output.InvocationRole;
  }
  if (output.Url !== undefined) {
    contents.Url = output.Url;
  }
  return contents;
};

const deserializeAws_json1_1ImportSshPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): ImportSshPublicKeyResponse => {
  let contents: any = {
    __type: "ImportSshPublicKeyResponse",
    ServerId: undefined,
    SshPublicKeyId: undefined,
    UserName: undefined
  };
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.SshPublicKeyId !== undefined) {
    contents.SshPublicKeyId = output.SshPublicKeyId;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  let contents: any = {
    __type: "InternalServiceError",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListServersResponse = (
  output: any,
  context: __SerdeContext
): ListServersResponse => {
  let contents: any = {
    __type: "ListServersResponse",
    NextToken: undefined,
    Servers: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Servers !== undefined) {
    contents.Servers = deserializeAws_json1_1ListedServers(
      output.Servers,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Arn: undefined,
    NextToken: undefined,
    Tags: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListUsersResponse = (
  output: any,
  context: __SerdeContext
): ListUsersResponse => {
  let contents: any = {
    __type: "ListUsersResponse",
    NextToken: undefined,
    ServerId: undefined,
    Users: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.Users !== undefined) {
    contents.Users = deserializeAws_json1_1ListedUsers(output.Users, context);
  }
  return contents;
};

const deserializeAws_json1_1ListedServer = (
  output: any,
  context: __SerdeContext
): ListedServer => {
  let contents: any = {
    __type: "ListedServer",
    Arn: undefined,
    EndpointType: undefined,
    IdentityProviderType: undefined,
    LoggingRole: undefined,
    ServerId: undefined,
    State: undefined,
    UserCount: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.EndpointType !== undefined) {
    contents.EndpointType = output.EndpointType;
  }
  if (output.IdentityProviderType !== undefined) {
    contents.IdentityProviderType = output.IdentityProviderType;
  }
  if (output.LoggingRole !== undefined) {
    contents.LoggingRole = output.LoggingRole;
  }
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.UserCount !== undefined) {
    contents.UserCount = output.UserCount;
  }
  return contents;
};

const deserializeAws_json1_1ListedServers = (
  output: any,
  context: __SerdeContext
): Array<ListedServer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListedServer(entry, context)
  );
};

const deserializeAws_json1_1ListedUser = (
  output: any,
  context: __SerdeContext
): ListedUser => {
  let contents: any = {
    __type: "ListedUser",
    Arn: undefined,
    HomeDirectory: undefined,
    HomeDirectoryType: undefined,
    Role: undefined,
    SshPublicKeyCount: undefined,
    UserName: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.HomeDirectory !== undefined) {
    contents.HomeDirectory = output.HomeDirectory;
  }
  if (output.HomeDirectoryType !== undefined) {
    contents.HomeDirectoryType = output.HomeDirectoryType;
  }
  if (output.Role !== undefined) {
    contents.Role = output.Role;
  }
  if (output.SshPublicKeyCount !== undefined) {
    contents.SshPublicKeyCount = output.SshPublicKeyCount;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1ListedUsers = (
  output: any,
  context: __SerdeContext
): Array<ListedUser> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListedUser(entry, context)
  );
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  let contents: any = {
    __type: "ResourceExistsException",
    Message: undefined,
    Resource: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Resource !== undefined) {
    contents.Resource = output.Resource;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined,
    Resource: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Resource !== undefined) {
    contents.Resource = output.Resource;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1SshPublicKey = (
  output: any,
  context: __SerdeContext
): SshPublicKey => {
  let contents: any = {
    __type: "SshPublicKey",
    DateImported: undefined,
    SshPublicKeyBody: undefined,
    SshPublicKeyId: undefined
  };
  if (output.DateImported !== undefined) {
    contents.DateImported = new Date(
      output.DateImported % 1 != 0
        ? Math.round(output.DateImported * 1000)
        : output.DateImported
    );
  }
  if (output.SshPublicKeyBody !== undefined) {
    contents.SshPublicKeyBody = output.SshPublicKeyBody;
  }
  if (output.SshPublicKeyId !== undefined) {
    contents.SshPublicKeyId = output.SshPublicKeyId;
  }
  return contents;
};

const deserializeAws_json1_1SshPublicKeys = (
  output: any,
  context: __SerdeContext
): Array<SshPublicKey> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SshPublicKey(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TestIdentityProviderResponse = (
  output: any,
  context: __SerdeContext
): TestIdentityProviderResponse => {
  let contents: any = {
    __type: "TestIdentityProviderResponse",
    Message: undefined,
    Response: undefined,
    StatusCode: undefined,
    Url: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Response !== undefined) {
    contents.Response = output.Response;
  }
  if (output.StatusCode !== undefined) {
    contents.StatusCode = output.StatusCode;
  }
  if (output.Url !== undefined) {
    contents.Url = output.Url;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    RetryAfterSeconds: undefined
  };
  if (output.RetryAfterSeconds !== undefined) {
    contents.RetryAfterSeconds = output.RetryAfterSeconds;
  }
  return contents;
};

const deserializeAws_json1_1UpdateServerResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerResponse => {
  let contents: any = {
    __type: "UpdateServerResponse",
    ServerId: undefined
  };
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateUserResponse = (
  output: any,
  context: __SerdeContext
): UpdateUserResponse => {
  let contents: any = {
    __type: "UpdateUserResponse",
    ServerId: undefined,
    UserName: undefined
  };
  if (output.ServerId !== undefined) {
    contents.ServerId = output.ServerId;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};